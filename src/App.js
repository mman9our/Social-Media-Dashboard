import React from "react";
// import Header from "./Components/Header";
import Card from "./Components/MainCards";
import BottomCards from "./Components/BottomCards";
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = (e) => {
    console.log(e.target.checked);

    setDarkMode(e.target.checked);
  };

    // const handleModeChange = (e) => {
    //   console.log(e.target.checked);


    return (
    <div className={darkMode && "dark"}>
      <div className="dark:text-slate-300 dark:bg-darkbg-dark">
        {/* <Header /> */}
        <div className=" bg-bg  w-full text-slate-400 pb-40 dark:bg-darkbg-dark">
      <div className="container py-9 flex justify-between items-center">
        
          <div className="">
            <h1 className=" text-slate-800 dark:text-white text-3xl font-bold ">Social Media Dashboard</h1>
            <p className=" text-sm">Total Followers: 23,004</p>
          </div>

          <div className="toggle text-xl">
            <span className=" pr-2">Dark Mode</span>
            <input type="checkbox" onChange={handleModeChange}/>
          </div>
        </div>
      </div>



        <Card />   

          <div className="container text-slate-800 dark:text-white pt-14 pb-12 ">
            <span className=" text-2xl font-bold ">Overview - Today</span>
          </div>
          <BottomCards /> 
      </div>
      <div className=" w-full  h-56 dark:bg-darkbg-dark"> </div>
    </div>
  );
}

export default App;
