import React, { useState } from "react";
import {
  PIZZA_IMG_URL,
  IceCreams_IMG_URL,
  NORTH_IMG_URL,
  CHINESE_IMG_URL,
  BURGER_IMG_URL,
  PURE_VEG_IMG_URL,
} from "../utils/constant";
import { toast } from "react-hot-toast";

const BodyScroller = (props) => {
  const { listOfRestaurant, setFilteredList, setProgress, filteredList } =
    props;
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-wrap w-10/12  mx-auto justify-center md:justify-between shadow-lg rounded-3xl p-8">
      <div
        className="cursor-pointer hover:text-orange-400"
        onClick={() => {
          setFilteredList(
            listOfRestaurant.filter((res) => {
              setProgress(30);
              return res.info.cuisines
                .join(",")
                .toLowerCase()
                .includes("pizza");
            })
          );
          setProgress(100);
          toast("Pizza filter applied");
        }}
      >
        <img
          src={PIZZA_IMG_URL}
          className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
        />
      </div>


      <div
        className="cursor-pointer hover:text-orange-400"
        onClick={() => {
          setProgress(30);
          setFilteredList(
            listOfRestaurant.filter((res) => {
              return res.info.cuisines
                .join(",")
                .toLowerCase()
                .includes("north indian");
            })
          );
          setProgress(100);
          toast("North Indian filter applied");
        }}
      >
        <img
          src={NORTH_IMG_URL}
          className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
        />
      </div>


      <div
        className="cursor-pointer hover:text-orange-400"
        onClick={() => {
          setProgress(30);
          setFilteredList(
            listOfRestaurant.filter((res) => {
              return res.info.cuisines
                .join(",")
                .toLowerCase()
                .includes("ice cream");
            })
          );
          setProgress(100);
          toast("Ice cream filter applied");
        }}
      >
        <img
          src={IceCreams_IMG_URL}
          className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
        />
      </div>


      <div
        className="cursor-pointer hover:text-orange-400"
        onClick={() => {
          setProgress(30);
          setFilteredList(
            listOfRestaurant.filter((res) => {
              return res.info.cuisines
                .join(",")
                .toLowerCase()
                .includes("chinese");
            })
          );
          setProgress(100);
          toast("Chinese filter applied");
        }}
      >
        <img
          src={CHINESE_IMG_URL}
          className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
        />
      </div>


      <div
        className="cursor-pointer hover:text-orange-400"
        onClick={() => {
          setProgress(30);
          setFilteredList(
            listOfRestaurant.filter((res) => {
              return res.info.cuisines
                .join(",")
                .toLowerCase()
                .includes("burger");
            })
          );
          setProgress(100);
          toast("Burger filter applied");
        }}
      >
        <img
          src={BURGER_IMG_URL}
          className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
        />
      </div>


      <div
        className="cursor-pointer hover:text-orange-400"
        onClick={() => {
          setProgress(30);
          setFilteredList(
            listOfRestaurant.filter((res) => {
              return res?.info?.veg ;
            })
          );
          setProgress(100);
          toast("Pure veg filter applied");
        }}
      >
        <img
          src={PURE_VEG_IMG_URL}
          className="w-30 h-20 md:w-40 md:h-40 rounded-3xl m-2 "
        />
      </div>



    </div>
  );
};

export default BodyScroller;
