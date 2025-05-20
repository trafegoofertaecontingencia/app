export default function Categories() {

    const categories = [
        {cat: "Carros", path: "/categories/category.jpg"},
        {cat: "Motos", path: "/categories/category2.jpg"},
        {cat: "Acessórios", path: "/categories/category3.jpg"},
        {cat: "Pneus", path: "/categories/category4.jpg"},
    ]
    return(
        <div className="m-5">
            <p className="mb-2 font-bold">Categorias</p>
            <div className="overflow-auto">
                <div className="w-[auto] h-[250px] flex gap-3">
                    {categories.map((cat, index) => (
                        <img key={index} className="rounded-xl h-[250px] w-[250px]" src={cat.path} alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}