"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Car {
  _id: string;
  brand: string;
  model: string;
  price: number;
  condition: string;
  yearFabrication: number;
  yearModel: number;
  mileage: number;
  images: string[];
}

export default function OfertasPage() {
  const searchParams = useSearchParams();
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const query = searchParams.toString();
      const res = await fetch(`/api/cars?${query}`);
      const data = await res.json();
      setCars(data);
    };

    fetchCars();
  }, [searchParams]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ofertas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.length === 0 ? (
          <p>Nenhum resultado encontrado</p>
        ) : (
          cars.map((car) => (
            <div key={car._id} className="border p-4 rounded-lg shadow">
              <img
                src={car.images[0]}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h2 className="text-lg font-semibold">
                {car.brand} {car.model}
              </h2>
              <p>
                {car.condition.toUpperCase()} - {car.yearFabrication}/
                {car.yearModel}
              </p>
              <p>{car.mileage} km</p>
              <p className="text-red-500 font-bold">
                R$ {car.price.toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
