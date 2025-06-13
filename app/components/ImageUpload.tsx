"use client";

import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { X } from 'lucide-react';

interface ImageUploadProps {
  label?: string;
  name: string;
  setValue: (name: string, value: any) => void;
}

export function ImageUpload({ label = "Imagens", name, setValue }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));

    const updatedFiles = [...files, ...newFiles];
    const updatedPreviews = [...previews, ...newPreviews];

    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
    setValue(name, updatedFiles);
  };

  const removeImage = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);

    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
    setValue(name, updatedFiles);

    // também limpa input se necessário
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };


  return (
    <div>
      <Label className="mb-1 block text-sm font-medium text-zinc-300">
        {label}
      </Label>

      <div className="relative border-2 border-dashed border-zinc-700 rounded-lg p-6 text-center hover:border-zinc-500 transition-colors">
        <Input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className="flex flex-col items-center justify-center pointer-events-none">
          <UploadIcon />
          <p className="text-sm text-zinc-400">
            Clique ou arraste para enviar imagens
          </p>
          <p className="text-xs text-zinc-500 mt-1">Formatos aceitos: JPG, PNG</p>
        </div>
      </div>

      {previews.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mt-4">
          {previews.map((src, i) => (
            <div key={i} className="relative group">
              <img
                src={src}
                alt={`preview-${i}`}
                className="w-full h-24 object-cover rounded border border-zinc-700"
              />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 text-zinc-100 text-xs px-1.5 py-0.5 rounded"
              >
                <X />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function UploadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-zinc-500 mb-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l-4-4m4 4l4-4"
      />
    </svg>
  );
}
