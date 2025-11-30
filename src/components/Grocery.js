import React from "react";
import {
  BISCUITS_IMG_URL,
  PIZZA_IMG_URL,
  BODY_IMG_URL,
  TEA_IMG_URL,
  BEVERAGES_IMG_URL,
  CLEANING_IMG_URL,
  DAIRY_IMG_URL,
  FRESH_VEG_IMG_URL,
  MEAT_IMG_URL,
  BREAKFAST_IMG_URL,
} from "../utils/constant";

const Grocery = () => {
  return (
    <div className="my-5 shadow-lg w-full">
      <div className="h-auto p-5 m-5 flex flex-col lg:flex-row flex-wrap justify-between">

        {/* LEFT TEXT + IMAGE SECTION */}
        <div className="w-full lg:w-1/2 p-3 m-3 flex flex-col lg:flex-row items-center lg:items-start">
          <div>
            <div className="m-3 text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-bold">Easy grocery shopping</p>
              <p className="text-2xl md:text-3xl font-bold">for your requirements</p>
            </div>

            <div className="m-3 my-10 text-center lg:text-left">
              <p>
                🛵 <span className="font-semibold">Food delivered in minutes.</span>
                Just as fast as meals!
              </p>
              <p className="mt-2">
                ⏲ <span className="font-semibold">
                  From 6 a.m. till late night,{" "}
                </span>
                we bring everything from morning coffee to snacks.
              </p>
            </div>
          </div>

          <img
            src={FRESH_VEG_IMG_URL}
            alt=""
            className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-xl my-5"
          />
        </div>

        {/* FIRST ROW OF IMAGES */}
        <div className="flex flex-wrap w-full lg:w-10/12 mx-auto justify-center md:justify-between shadow-lg rounded-3xl p-6">
          {[BISCUITS_IMG_URL, BODY_IMG_URL, TEA_IMG_URL, BEVERAGES_IMG_URL].map(
            (img, index) => (
              <div
                key={index}
                className="cursor-pointer hover:scale-105 transition-all"
              >
                <img
                  src={img}
                  className="w-24 h-20 md:w-40 md:h-40 object-cover rounded-3xl m-3"
                />
              </div>
            )
          )}
        </div>

        {/* SECOND ROW OF IMAGES */}
        <div className="flex flex-wrap w-full lg:w-10/12 mx-auto justify-center md:justify-between shadow-lg rounded-3xl p-6 mt-5">
          {[CLEANING_IMG_URL, DAIRY_IMG_URL, BREAKFAST_IMG_URL, MEAT_IMG_URL].map(
            (img, index) => (
              <div
                key={index}
                className="cursor-pointer hover:scale-105 transition-all"
              >
                <img
                  src={img}
                  className="w-24 h-20 md:w-40 md:h-40 object-cover rounded-3xl m-3"
                />
              </div>
            )
          )}
        </div>

        {/* BOTTOM TEXT SECTION */}
        <div className="w-full lg:w-10/12 p-3 mt-10 m-3 text-center mx-auto">
          <div className="m-3">
            <h1 className="text-2xl md:text-3xl font-bold">
              Recently included feature for groceries
            </h1>
            <p className="text-2xl md:text-3xl font-bold mt-1">
              Place your order today!
            </p>

            <div className="m-3 my-10 text-lg">
              <p>
                🥦 Fresh fruits, vegetables, dairy products, bread, eggs, and much more...
              </p>
              <p className="mt-2">
                💖 Trusted by customers in Bangalore, Delhi-NCR, Hyderabad,
                Mumbai, Chennai, Pune & more.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Grocery;
