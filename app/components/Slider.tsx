"use client"

import { motion } from "motion/react";
import Slide from "./Slide";


export default function Slider() {

  const banners = {
    paths: ["file.svg", "globe.svg"]
  }

  return (
    <motion.div 
    initial={{right: "0"}}
    animate={{right: "100vw"}}
    transition={{duration: 0.7, ease: "easeInOut"}}
    className="w-[auto] h-[400px] border flex relative">
      {banners.paths.map((banner, index) => (
        <Slide key={index} path={banner} />
      ))}
    </motion.div>
  )
}
