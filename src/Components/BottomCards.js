import React from "react";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const BottomCards = () => {
  return (
      
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 ">
        {Array(8)
          .fill(" ")
          .map((el) => (
        <div className="card-sm">
          <div className="flex items-center justify-between">
            <h4 className="text-slate-800 dark:text-white font-bold">Pages Views</h4>
            <AiFillFacebook className=" text-facebook" size={22} />
          </div>
          <div className="flex items-center justify-between mt-8">
            <h3 className=" font-black text-2xl text-slate-800 dark:text-white">
              {" "}
              101
            </h3>
            <div className="flex items-center gap-1 text-maingreen text-sm">
              <span>
                <RiArrowUpSFill />
              </span>
              <span>300%</span>
            </div>
          </div>
        </div>
         ))} 
      </div>
    </div>
  );
};

export default BottomCards;
