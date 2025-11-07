"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const geist_mono = Geist_Mono({
  weight: "800",
  subsets: ["latin"],
});

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        <p
          className={`text-blue-950 text-7xl ${geist_mono.className} font-semibold`}
        >
          WaySmart
        </p>
      </div>
    </div>
  );
}

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Poppins } from "next/font/google";

// const poppinsFont = Poppins({
//   weight: "400",
//   subsets: ["latin"],
//   style: "italic",
// });

// const LoadingScreen = () => {
//   return (
//     <motion.div
//       key="loading-screen"
//       className={`flex text-center items-center justify-center ${poppinsFont.className} w-full h-screen bg-[#C7D8EB]`}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }} // How long the fade-out takes
//     >
//       <motion.h1
//         initial={{ opacity: 0, z: 100, scale: 0.3 }}
//         animate={{ opacity: 1, z: 0, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="text-7xl font-bold text-blue-950"
//       >
//         WaySmart
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default LoadingScreen;
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
