"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 1. Import motion and AnimatePresence
import MapComponent from "./components/mapComponent";
import Banner from "./components/Banner";
import Whywaysmart from "./components/Whywaysmart";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // I'm changing this to 3 seconds (3000)
    // Your "Hello" animates for 2s, so this gives 1s to see it
    // before it fades out.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  // 2. We can't use `if (isLoading)` anymore, we must return
  //    AnimatePresence so it can handle the logic.
  return (
    // 3. Add AnimatePresence wrapper with mode="wait"
    //    "wait" means it will wait for the exit animation to
    //    finish before starting the enter animation.
    <AnimatePresence mode="wait">
      {isLoading ? (
        // 4. If loading, show the screen
        <LoadingScreen />
      ) : (
        // 5. When loading is false, show this motion.div
        <motion.div
          key="main-content"
          // This is the ENTER animation for your main page
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }} // Fade in
        >
          {/* <MapComponent/> */}
          <Banner />
          <Whywaysmart />
        </motion.div>
      )}
    </AnimatePresence>
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
