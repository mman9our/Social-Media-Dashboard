import React from "react";
import { useState } from "react";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const Card = () => {
  return (
    <div className="container grid lg:gap-8 gap-6
     lg:grid-cols-4 md:grid-cols-2 grid-cols-1 -mt-40 ">
      <div className="card before:bg-facebook container text-slate-400">
        <div className=" flex items-center justify-center gap-1 font-bold pb-6">
          <span className=" text-facebook">
            <AiFillFacebook size={22} />
          </span>
          <h2>Mohammed Mansour</h2>
        </div>
        <div className="">
          <h2 className=" text-slate-800 dark:text-white text-6xl font-bold">1987</h2>
          <p className=" font-medium uppercase tracking-[0.3em]">Followers</p>
        </div>
        <div className="flex items-center justify-center gap-1 pt-6 text-maingreen">
          <span>
            <RiArrowUpSFill />
          </span>
          <span>Today</span>
        </div>
      </div>

      <div className="card before:bg-twitter container text-slate-400">
        <div className=" flex items-center justify-center gap-1 font-bold pb-6">
          <span className=" text-twitter">
            <AiFillTwitterSquare size={22} />
          </span>
          <h2>@mman9our</h2>
        </div>
        <div className="">
          <h2 className=" text-slate-800 dark:text-white dark:text-white dark:text-white text-6xl font-bold">1044</h2>
          <p className=" font-medium uppercase tracking-[0.3em]">Followers</p>
        </div>
        <div className="flex items-center justify-center gap-1 pt-6 text-maingreen">
          <span>
            <RiArrowUpSFill />
          </span>
          <span>Today</span>
        </div>
      </div>

      <div className="card before:bg-gradient-to-r  before:from-amber-500 before:to-fuchsia-500 container text-slate-400">
        <div className=" flex items-center justify-center gap-1 font-bold pb-6">
          <span className=" text-fuchsia-700">
            <AiFillInstagram size={22} />
          </span>
          <h2>@mman9our</h2>
        </div>
        <div className="">
          <h2 className=" text-slate-800 dark:text-white text-6xl font-bold">11k</h2>
          <p className=" font-medium uppercase tracking-[0.3em]">Followers</p>
        </div>
        <div className="flex items-center justify-center gap-1 pt-6 text-maingreen">
          <span>
            <RiArrowUpSFill />
          </span>
          <span>Today</span>
        </div>
      </div>

      <div className="card before:bg-rose-700 container text-slate-400">
        <div className=" flex items-center justify-center gap-1 font-bold pb-6">
          <span className=" text-rose-700">
            <AiFillYoutube size={22} />
          </span>
          <h2>Mohammed Mnasour</h2>
        </div>
        <div className="">
          <h2 className=" text-slate-800 dark:text-white text-6xl font-bold">8239</h2>
          <p className=" font-medium uppercase tracking-[0.3em]">Subscribers</p>
        </div>
        <div className="flex items-center justify-center gap-1 pt-6 text-rose-700">
          <span>
            <RiArrowDownSFill />
          </span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
