"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

import { motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <motion.nav
      initial={{ height: "40px" }}
      animate={{ height: isOpen ? "300px" : "40px" }}
      transition={{ duration: 0.2, delay: !isOpen ? 0.3 : 0 }}
      className="bg-[#333] flex items-start justify-center relative"
    >
      <IoMdMenu
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-3xl"
      />

      {/* Celular */}
      <motion.ul
        initial={{ right: "-100%" }}
        animate={isOpen ? { right: "0" } : { right: "-100%" }}
        transition={isOpen ? { delay: 0.3 } : {}}
        className="md:hidden gap-3 list-none text-white justify-center bg-[#333] absolute right-[-100%] w-[100%] top-[50px] flex flex-col items-center p-3"
      >
        <li>Comprar</li>
        <li>Vender</li>
        <li>Assinar</li>
        <li>Serviços</li>
        <li>Notícias</li>
        <li>Ajuda</li>
      </motion.ul>

      {/* Computador */}
      <ul className="hidden md:flex gap-3 list-none text-white justify-center bg-[#333]">
        <li>Comprar</li>
        <li>Vender</li>
        <li>Assinar</li>
        <li>Serviços</li>
        <li>Notícias</li>
        <li>Ajuda</li>
      </ul>
    </motion.nav>
  );
}
