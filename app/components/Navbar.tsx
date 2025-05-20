"use client";

import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR FIXO */}
      <motion.nav
        initial={false}
        animate={{ height: isOpen ? 300 : 60 }}
        transition={{ duration: 0.3 }}
        className="bg-[#333] fixed top-0 left-0 w-full z-50 overflow-hidden px-4"
      >
        {/* Topbar */}
        <div className="flex items-center justify-between h-[60px]">
          <p className="text-white font-bold text-xl">LOGO</p>

          {/* Ícone de abrir/fechar */}
          <div className="md:hidden text-white text-3xl cursor-pointer">
            {isOpen ? (
              <IoMdClose onClick={() => setIsOpen(false)} />
            ) : (
              <IoMdMenu onClick={() => setIsOpen(true)} />
            )}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-white">
            <li><Link href="/">Comprar</Link></li>
            <li><Link href="/">Vender</Link></li>
            <li><Link href="/">Assinar</Link></li>
            <li><Link href="/">Serviços</Link></li>
            <li><Link href="/">Notícias</Link></li>
            <li><Link href="/">Ajuda</Link></li>
          </ul>
        </div>

        {/* Mobile Menu (slide in from right) */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-[60px] left-0 w-full bg-[#333] text-white flex flex-col items-center gap-4"
            >
              <li><Link href="/">Comprar</Link></li>
              <li><Link href="/">Vender</Link></li>
              <li><Link href="/">Assinar</Link></li>
              <li><Link href="/">Serviços</Link></li>
              <li><Link href="/">Notícias</Link></li>
              <li><Link href="/">Ajuda</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Espaço para compensar o navbar fixo */}
      <div className="h-[60px]" />
    </>
  );
}
