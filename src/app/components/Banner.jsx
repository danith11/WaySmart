"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/bgImage.jpg"
        alt="Background"
        fill
        priority
        className="object-cover absolute inset-0"
      />
      <div class="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col gap-4 h-full items-center justify-center text-white">
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-9xl font-medium md:font-bold"
        >
          WaySmart
        </motion.h1>
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl"
        >
          Smart Routes for Multi-Stop Journeys
        </motion.h1>
      </div>
    </div>
  );
};

export default Banner;
