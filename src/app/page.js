"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 1. Import motion and AnimatePresence
import Banner from "./components/Banner";
// import Whywaysmart from "./components/Whywaysmart";
// import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
  
    // <AnimatePresence mode="wait">
    //   {isLoading ? (
    //     <LoadingScreen />
    //   ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >          
          <Banner />
        </motion.div>
  //     )}
  //   </AnimatePresence>
  );
}
// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import MapComponent from "./components/mapComponent";
// import Banner from "./components/Banner";
// import Whywaysmart from "./components/Whywaysmart";
// import LoadingScreen from "./components/LoadingScreen";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Wait for 2 seconds (2000 milliseconds)
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <LoadingScreen />;
//   }
//   return (
//     <div>
//       {/* <MapComponent/> */}
//       <Banner />
//       <Whywaysmart />
//     </div>
//   );
// }
