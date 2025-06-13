"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { ImageUpload } from "../components/ImageUpload";

interface Marca {
  nome: string;
  codigo: string;
}

interface Modelo {
  nome: string;
  codigo: number;
}

interface Ano {
  nome: string;
  codigo: string;
}

export default function CreateCarPage() {
  const router = useRouter();
  const [brands, setBrands] = useState<Marca[]>([]);
  const [models, setModels] = useState<Modelo[]>([]);
  const [years, setYears] = useState<Ano[]>([]);
  const [selectedBrandCode, setSelectedBrandCode] = useState<string>("");
  const [selectedModelCode, setSelectedModelCode] = useState<string>("");


  const [userId] = useState("123456789");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
  try {
    const files: File[] = data.images;
    const imageUrls: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Upload_preset");
      formData.append("folder", "carros");

      console.log(formData)

      const uploadRes = await fetch("https://api.cloudinary.com/v1_1/dlihatgnj/image/upload", {
        method: "POST",
        body: formData,
      });

      const uploadResult = await uploadRes.json();
      imageUrls.push(uploadResult.secure_url);
    }

    const carData = {
      ...data,
      images: imageUrls, // substitui arquivos por URLs
    };


    const res = await fetch(`/api/cars?userId=${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carData),
    });

    if (res.ok) {
      console.log("tudo certo")
      router.push("/");
    } else {
        console.log("deu errado")
      alert("Erro ao salvar no banco");
    }
  } catch (err) {
    console.error("Erro ao cadastrar:", err);
    alert("Erro no upload das imagens");
  }
};


  useEffect(() => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  useEffect(() => {
    if (!selectedBrandCode) return;
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrandCode}/modelos`
    )
      .then((res) => res.json())
      .then((data) => setModels(data.modelos));
  }, [selectedBrandCode]);

  useEffect(() => {
    if (!selectedBrandCode || !selectedModelCode) return;
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrandCode}/modelos/${selectedModelCode}/anos`
    )
      .then((res) => res.json())
      .then((data) => setYears(data));
  }, [selectedBrandCode, selectedModelCode]);

  const categories = ['hatch', 'sedan', 'suv', 'picape', 'caminhao', 'van', 'conversivel', 'esportivo', 'outro']

  return (
    <div className="max-w-3xl mx-auto p-6 text-zinc-100 bg-zinc-900 shadow-md">
      <h1 className="text-2xl font-bold mb-6">Cadastrar Carro</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="mb-2">Marca</Label>
            <Select
              onValueChange={(val) => {
                const selected = brands.find((b) => b.nome === val);
                setValue("brand", val);
                setSelectedBrandCode(selected?.codigo || "");
                setValue("model", "");
                setValue("yearFipe", "");
                setModels([]);
                setYears([]);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a marca" />
              </SelectTrigger>
              <SelectContent className="max-h-64 overflow-y-auto">
                {brands.map((brand) => (
                  <SelectItem key={brand.codigo} value={brand.nome}>
                    {brand.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" {...register("brand", { required: true })} />
          </div>

          <div>
            <Label className="mb-2">Modelo</Label>
            <Select
              onValueChange={(val) => {
                const selected = models.find((m) => m.nome === val);
                setValue("model", val);
                setSelectedModelCode(String(selected?.codigo));
                setValue("yearFipe", "");
                setYears([]);
              }}
              disabled={!models.length}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o modelo" />
              </SelectTrigger>
              <SelectContent className="max-h-64 overflow-y-auto">
                {models.map((model) => (
                  <SelectItem key={model.codigo} value={model.nome}>
                    {model.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" {...register("model", { required: true })} />
          </div>

          <div>
            <Label className="mb-2">Categoria</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent className="max-h-64 overflow-y-auto">
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" {...register("bodyType", { required: true })} />
          </div>
        </div>

        

        {/* Ano do modelo via FIPE */}
        <div>
          <Label className="mb-2">Ano do Modelo (FIPE)</Label>
          <Select
            onValueChange={(val) => setValue("yearFipe", val)}
            disabled={!years.length}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione o ano" />
            </SelectTrigger>
            <SelectContent className="max-h-64 overflow-y-auto">
              {Array.isArray(years) &&
                years.map((year) => (
                  <SelectItem key={year.codigo} value={year.codigo}>
                    {year.nome}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <input type="hidden" {...register("yearFipe", { required: true })} />
        </div>

        {/* Outros campos como antes... */}
        <InputGroup
          label="Ano de Fabricação"
          name="yearFabrication"
          type="number"
          register={register}
        />
        <InputGroup label="Cor" name="color" register={register} />
        <InputGroup
          label="Quilometragem"
          name="mileage"
          type="number"
          register={register}
        />
        <InputGroup
          label="Preço"
          name="price"
          type="number"
          register={register}
        />

        {/* Input de imagens */}
        <div>
          <ImageUpload name="images" setValue={setValue} />
        </div>

        <InputGroup label="Estado" name="location.state" register={register} />
        <InputGroup label="Cidade" name="location.city" register={register} />
        <input type="hidden" name="seller" value={userId} />
        <div>
          <Label className="mb-2">Descrição</Label>
          <Textarea {...register("description")} className="min-h-[100px]" />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 border"
        >
          {isSubmitting ? "Enviando..." : "Cadastrar carro"}
        </Button>
      </form>
    </div>
  );
}

function InputGroup({ label, name, register, type = "text" }: any) {
  return (
    <div>
      <Label className="mb-2">{label}</Label>
      <Input type={type} {...register(name, { required: true })} />
    </div>
  );
}
