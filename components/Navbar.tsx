import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {

  return (
    <nav className=" bg-[#333]">
      <ul className="hidden md:flex gap-2 list-none text-white p-3">
        <li>Comprar</li>
        <li>Vender</li>
        <li>Assinar</li>
        <li>serviços</li>
        <li>Noticias</li>
        <li>Ajuda</li>
      </ul>

      <div
      className="md:hidden">
        <GiHamburgerMenu className="text-white cursor-pointer" />
      </div>
    </nav>
  );
}
