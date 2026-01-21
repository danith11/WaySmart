import React from "react";

const page = () => {
  return (
    <div className="mt-16">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <h1 className="text-3xl md:text-5xl font-semibold text-center mx-auto">
        About Us
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        Smart Routes for Multi-Stop Journeys
      </p>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
        <img
          className="max-w-sm w-full rounded-xl h-auto"
          src="../phoneMap.jpg"
          alt=""
        />
        <div>
          <h1 className="text-3xl font-semibold">Our features</h1>
          <p className="text-md text-slate-500 mt-2">
            WaySmart helps you plan smarter journeys by turning multiple
            destinations into the most efficient route. Instead of wasting time
            on zigzag paths, WaySmart analyzes your stops and shows you the best
            possible way to travel
          </p>

          <div className="flex flex-col gap-10 mt-6">
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Smart Route Planning
                </h3>
                <p className="text-sm text-slate-500">
                  Plan the most efficient route when you have multiple
                  destinations, saving time and effort.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Clear & Simple Navigation
                </h3>
                <p className="text-sm text-slate-500">
                  Plan the most efficient route when you have multiple
                  destinations, saving time and effort.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Save Time, Travel Smarter
                </h3>
                <p className="text-sm text-slate-500">
                  Reduce unnecessary travel, avoid zigzag routes, and move with
                  confidence every trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
