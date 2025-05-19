"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

import { motion } from "motion/react";

import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ height: "auto" }}
      animate={{ height: isOpen ? "260px" : "auto" }}
      transition={{ duration: 0.2, delay: !isOpen ? 0.3 : 0 }}
      className={`bg-[#333] flex items-start justify-center relative overflow-hidden`}
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
        className="md:hidden gap-3 list-none text-white justify-center bg-[#333] absolute right-[-100%] w-[100%] top-[30px] flex flex-col items-center p-3"
      >
        <li><Link href="/">Comprar</Link></li>
        <li><Link href="/">Vender</Link></li>
        <li><Link href="/">Assinar</Link></li>
        <li><Link href="/">Serviços</Link></li>
        <li><Link href="/">Notícias</Link></li>
        <li><Link href="/">Ajuda</Link></li>
      </motion.ul>

      {/* Computador */}
      <ul className="hidden md:flex gap-3 list-none text-white justify-center bg-[#333] p-3">
        <li><Link href="/">Comprar</Link></li>
        <li><Link href="/">Vender</Link></li>
        <li><Link href="/">Assinar</Link></li>
        <li><Link href="/">Serviços</Link></li>
        <li><Link href="/">Notícias</Link></li>
        <li><Link href="/">Ajuda</Link></li>
      </ul>
    </motion.nav>
  );
}
