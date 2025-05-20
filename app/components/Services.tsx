import { FaGear } from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      icon: "FaGear"
    },
    {
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Lorem ipsum dolor",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];


  return (
    <div className="m-5">
      <p className="font-bold">Serviços</p>

      <div className="flex gap-3 overflow-auto">
        {services.map((service, index) =>  (
            <div key={index} className="flex flex-col gap-2 p-3 mt-2 min-w-[250px] bg-white rounded-xl">
                {/* Procurar forma de deixar o icone dinamico */}
                <FaGear />
              <h1 className="text-2xl font-bold">{service.title}</h1>
              <p>{service.desc}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
