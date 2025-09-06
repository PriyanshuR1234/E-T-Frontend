import React from "react";

const NewPage = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center text-white">
      {/* ✅ Background Image */}
      <img
        src="/newPageBG.jpg"
        alt="bg_image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      ✅ Dark overlay for opacity
      <div className="absolute inset-0  bg-opacity-80"></div>

      {/* ✅ Content (cards on top) */}
      <div className="relative z-10 flex gap-90 items-center justify-center content-center">
        {/* Test Card */}
        <div className="">
          <div
          className="w-64 h-64 flex items-center justify-center bg-red-600 rounded-2xl shadow-2xl text-3xl font-bold cursor-pointer hover:scale-105 hover:bg-red-700 transition"
          onClick={() => alert("Test Card Clicked")}
          >
           Test
        </div>
        
          
         
        </div>
        

        {/* Update Card */}
        <div
          className="w-64 h-64 flex items-center justify-center bg-white text-black rounded-2xl shadow-2xl text-3xl font-bold cursor-pointer hover:scale-105 hover:bg-gray-200 transition"
          onClick={() => alert("Update Card Clicked")}
        >
          Update
        </div>
      </div>
    </div>
  );
};

export default NewPage;
