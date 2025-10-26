"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

const LoadingScreen = () => {
  return (
    <motion.div
      key="loading-screen"
      className={`flex text-center items-center justify-center ${poppinsFont.className} w-full h-screen bg-[#C7D8EB]`}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // How long the fade-out takes
    >
      <motion.h1
        initial={{ opacity: 0, y: 100, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2 }} 
        className="text-7xl"
      >
        Hello
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Poppins } from "next/font/google"; 

// const poppinsFont = Poppins({
//   weight: "400", 
//   subsets: ["latin"],
//   style:'italic'
// });

// const LoadingScreen = () => {
//   return (
//     <motion.div key="loading-screen" className={`flex text-center items-center justify-center ${poppinsFont.className} w-full h-screen bg-[#C7D8EB]`}>
//       <motion.h1
//         initial={{ opacity: 0, y: 100, scale: 0.3 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 2 }}
//         className="text-7xl"
//       >
//         Hello
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default LoadingScreen;
