export default function Categories() {

    const categories = [
        {cat: "Carros elétricos", path: "/categories/eletric.jpg"},
        {cat: "Hatches", path: "/categories/hatches.jpg"},
        {cat: "Picapes", path: "/categories/picape.jpg"},
        {cat: "Sedans", path: "/categories/sedans.jpg"},
    ]
    return(
        <div className="m-5">
            <p className="mb-2 font-bold">Categorias</p>
            <div className="overflow-auto">
                <div className="w-[auto] h-[250px] flex gap-3">
                    {categories.map((cat, index) => (
                        <div className="h-[250px] w-[350px] relative">
                            <p className="absolute text-white font-bold bottom-4 left-4 text-2xl">{cat.cat}</p>
                            <img key={index} className="rounded-xl min-w-[250px]" src={cat.path} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}