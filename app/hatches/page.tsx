import { CiCalendarDate } from "react-icons/ci";
import { TfiDashboard } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";

export default function Hatches() {
  const cars = [
    {
      brand: "Volkswagen",
      model: "Gol",
      price: "23.500",
      location: "São Paulo",
      desc: "1.0 duas portas",
      year: "2011/2012",
      km: "103.689",
      img: "https://blog.olhonocarro.com.br/wp-content/uploads/2023/07/image-51.jpeg"
    },
    {
      brand: "Chevrolet",
      model: "Montana",
      price: "45.540",
      location: "Sorocaba",
      desc: "1.4",
      year: "2014/2015",
      km: "56.621",
      img: "https://sicrediuniaomsto.coop.br/sites/default/files/classificados/IMG-20220919-WA0167.jpg"
    },
    {
      brand: "Chevrolet",
      model: "Celta",
      price: "20.910",
      location: "Itapetininga",
      desc: "1.0 4 portas",
      year: "2010/2010",
      km: "201.639",
      img: "https://image1.mobiauto.com.br/images/api/images/v1.0/241452410/transform/fl_progressive,f_webp,q_70,w_750"
    },
  ];

  return (
    <div className="bg-white p-4 flex flex-col gap-8">
      {cars.map((car, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex gap-2">
            <img
              className="w-[200px] rounded-xl"
              src={car.img}
              alt=""
            />

            <div className="flex flex-col">
              <p className="font-bold uppercase">{car.model}</p>
              <p>{car.desc}</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <CiCalendarDate />
                  <p>{car.year}</p>
                </div>
                <div className="flex items-center gap-1">
                  <TfiDashboard />
                  <p>{car.km}</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <CiLocationOn />
                <p>São Paulo</p>
              </div>
              <div>
                <p className="font-bold">R$ {car.price}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 w-[100%] mt-2">
            <button className="bg-gray-200 w-[50%] p-2 rounded-xl">´Detalhes</button>
            <button className="bg-[#333] w-[50%] rounded-xl text-white">Ver Parcelas</button>
          </div>
        </div>
      ))}
    </div>
  );
}
