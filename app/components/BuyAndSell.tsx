"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";

export default function BuyAndSell() {

    const router = useRouter();

    const [buyOrSell, setBuyOrSell] = useState<number | null>(0);
    const [usedOrNew, setUsedOrNew] = useState<number | null>(0);
    const [vehicle, setVehicle] = useState<string | null>(null);
    const [search, setSearch] = useState<string>("");

    const handleBuyOrSell = (index: number, item: string) => {
        setBuyOrSell(index);
        setVehicle(item.split(" ")[1]);
    }

    const handleSearch = () => {
        const query = new URLSearchParams({
            vehicle: vehicle || '',
            condition: usedOrNew === 1 ? 'new' : usedOrNew === 2 ? 'used' : 'all',
            search: search
        }).toString();

        router.push(`/offers?${query}`);
    }

    const options = [
        {opt: "Comprar carros"},
        {opt: "Comprar motos"},
        {opt: "Quero vender"},
        {opt: "Quero financiar"}
    ]

    const moreOptions = [
        {opt: "Todos"},
        {opt: "Novos"},
        {opt: "Usados"}
    ]

    return (
        <div className="bg-white w-90 rounded-2xl m-[auto]">
            <div className="flex justify-center p-4 gap-3">
                {options.map((item, index) => (
                    <div onClick={() => handleBuyOrSell(index, item.opt) } key={index} className={`flex flex-col items-center cursor-pointer ${index == buyOrSell && "font-bold"}`}>
                        <p>{item.opt.split(" ")[0]}</p>
                        <p>{item.opt.split(" ")[1]}</p>
                    </div>
                ))}
            </div>
            <div className="flex gap-3">
                {moreOptions.map((item, index) => (
                    <div onClick={() => setUsedOrNew(index)} key={index} className={`bg-gray-200 cursor-pointer ${usedOrNew == index && "bg-red-200"} p-2 rounded-xl ml-2 text-red-500 font-bold`}>
                        <p>{item.opt}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center m-4 bg-gray-200 p-2 rounded-xl">
                <IoSearchOutline />
                <input 
                    placeholder={`Digite a marca ou modelo ${vehicle === "carros" ? "do carro" : vehicle === "motos" ? "da moto" : "do carro"}`} 
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[100%] ml-2 focus:outline-none" 
                />
            </div>
            <div className="flex justify-center">
                <button onClick={handleSearch} className="bg-red-500 cursor-pointer p-3 w-[100%] rounded-xl text-white">Ver ofertas</button>
            </div>
        </div>
    )
}
