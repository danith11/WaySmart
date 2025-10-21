"use client";

import React from "react";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex flex-col justify-between p-30 sm:flex-row gap-5">
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-blue-500"
        >
          Welcome to WaySmart
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-l font-light"
        >
          Smart Routes for Multi-Stop Journeys
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-full sm:max-w-1/2 "
      >
        <p className="text-l">
          Planning a trip with multiple destinations? Just enter all your stops,
          and WarSmart instantly calculates the most efficient order to visit
          them. Save time, fuel, and hassle.
        </p>
      </motion.div>
    </div>
  );
};

export default Banner;
