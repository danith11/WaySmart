import React from "react";

// 1. Define your data as an array of objects
//    This makes it easy to add, remove, or change items later.
const featuresData = [
  {
    id: 1,
    imgSrc: "/bnr1.jpg",
    alt: "A smart, direct route on a map",
    text: "Turn your destination list into a smart plan.",
  },
  {
    id: 2,
    imgSrc: "/bnr2.png",
    alt: "A person viewing an optimized journey on a phone",
    text: "See your journey, optimized",
  },
  {
    id: 3,
    imgSrc: "/bnr3.png",
    alt: "A messy, zigzagging line next to a clean, straight line",
    text: "Outsmart the zigzag",
  },
];

const Whywaysmart = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-8 gap-10 w-full">
      {featuresData.map((feature) => (
        <div key={feature.id} className="items-center text-center">
          <img
            src={feature.imgSrc}
            alt={feature.alt} 
            className="w-full rounded-2xl opacity-80 hover:opacity-90 transition-all duration-75"
          />
          <p className="mt-2 text-lg font-bold">
            {feature.text} 
          </p>
        </div>
      ))}
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
