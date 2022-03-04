import React from "react";

const Header = () => {
  return (
    <div className="dark">
   {/* Header */}
   <div className=" bg-bg  w-full text-slate-400 pb-40 dark:bg-darkbg-dark">
      <div className="container py-9 flex justify-between items-center">
        
          <div className="">
            <h1 className=" text-slate-800 dark:text-white text-3xl font-bold ">Social Media Dashboard</h1>
            <p className=" text-sm">Total Followers: 23,004</p>
          </div>

          <div className=" text-xl">
            <span className=" pr-2">Dark Mode</span>
            <input type="checkbox" id="checkbox"/>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Header;
