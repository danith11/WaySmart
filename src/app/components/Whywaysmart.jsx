"use client";
import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    id: 1,
    imgSrc: "/phoneMapZoom.jpg",
    alt: "A smart, direct route on a map",
    text: "Turn your destination list into a smart plan.",
  },
  {
    id: 2,
    imgSrc: "/selectDes.jpg",
    alt: "A person viewing an optimized journey on a phone",
    text: "See your journey, optimized",
  },
  {
    id: 3,
    imgSrc: "/compass.jpg",
    alt: "A messy, zigzagging line next to a clean, straight line",
    text: "Outsmart the zigzag",
  },
];

const Whywaysmart = () => {
  return (
    <div>
      <p className="text-gray-500 text-2xl font-md p-8 mt-10 justify-center items-center flex ">
        Why WaySmart for you
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center p-8 gap-10 w-full">
        {featuresData.map((feature) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative w-full max-w-sm overflow-hidden rounded-2xl"
          >
            {/* Image */}
            <img
              src={feature.imgSrc}
              alt={feature.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <p
              className="
              absolute bottom-6 left-1/2 -translate-x-1/2
              text-center text-white text-lg font-bold px-4
              opacity-0 translate-y-10
              transition-all duration-300
              group-hover:opacity-100 group-hover:translate-y-[-50%]
            "
            >
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Whywaysmart;

// import React from "react";

// const Whywaysmart = () => {

//   return (
//     <div className="flex flex-col sm:flex-row justify-between items-center p-30 gap-10">
//       <div className="items-center text-center">
//         <img
//           src="/bnr1.jpg"
//           alt=""
//           className="w-full rounded-2xl opacity-80 hover:opacity-90 transition-all duration-75"
//         />
//         <p className="mt-2 text-lg font-bold">
//           Turn your destination list into a smart plan.
//         </p>
//       </div>
//       <div className="items-center text-center">
//         <img
//           src="/bnr2.png"
//           alt=""
//           className="w-full rounded-2xl opacity-80 hover:opacity-90 transition-all duration-75"
//         />
//         <p className="mt-2 text-lg font-bold">See your journey, optimized</p>
//       </div>
//       <div className="items-center text-center">
//         <img
//           src="/bnr3.png"
//           alt=""
//           className="w-full rounded-2xl opacity-80 hover:opacity-90 transition-all duration-75"
//         />
//         <p className="mt-2 text-lg font-bold">Outsmart the zigzag</p>
//       </div>
//     </div>
//   );
// };

// export default Whywaysmart;
