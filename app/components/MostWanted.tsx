export default function MostWanted() {

  const cars = [
    {name: "Gol", brand: "Volkswagen", path: "/categories/category.jpg" },
    {name: "Gol", brand: "Volkswagen", path: "/categories/category.jpg" },
    {name: "Gol", brand: "Volkswagen", path: "/categories/category.jpg" },
    {name: "Gol", brand: "Volkswagen", path: "/categories/category.jpg" },
    {name: "Gol", brand: "Volkswagen", path: "/categories/category.jpg" }
  ];

  return (
    <div className="m-5">
      <p className="mb-2 font-bold">Mais buscados</p>
      
      <div className="overflow-auto">
                <div className="w-[auto] h-[250px] flex gap-3">
                    {cars.map((car, index) => (
                        <img key={index} className="rounded-xl h-[250px] w-[250px]" src={car.path} alt="" />
                    ))}
                </div>
            </div>
    </div>
  );
}
