import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-between p-30 sm:flex-row gap-5" >
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">Welcome to WaySmart</h1>
        <h3 className="text-l">Smart Routes for Multi-Stop Journeys</h3>
      </div>
      <div className="max-w-full sm:max-w-1/2 ">
        <p className="text-l">
          Planning a trip with multiple destinations? Just enter all your stops,
          and WarSmart instantly calculates the most efficient order to visit
          them. Save time, fuel, and hassle.
        </p>
      </div>
    </div>
  );
};

export default Banner;
