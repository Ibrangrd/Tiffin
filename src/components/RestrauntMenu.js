import { useState } from "react";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategories from "./RestrauntCategories";
import Shimmer from "./Shimmer";
import { useParams, useLoaderData } from "react-router-dom";
import ShimmerAccordion from "./ShimmerAccordion";

const RestrauntMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestrauntMenu(resID);
  const [showIndex, setShowIndex] = useState(null);

  const categories = resInfo?.cards
    .find((x) => x.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const restaurantDetail = resInfo?.cards.find(
    (x) =>
      x.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  return (
    <>
      {resInfo ? (
        <div className="">
          <div className="sm:w-6/12  mt-24 mx-auto shadow-lg">
            <h2 className="sm:text-5xl text-3xl font-bold my-2 text-center">
              {restaurantDetail.card.card.info.name}
            </h2>
            <div className="shadow-lg sm:m-8 p-3 w-full rounded-lg">
              <p className=" rounded-lg p-2 m-2 text-sm font-semibold">
                ⭐ {restaurantDetail.card.card.info.avgRating}(
                {restaurantDetail.card.card.info.totalRatingsString}).
                &nbsp;&nbsp; 🍽️{" "}
                {restaurantDetail.card.card.info.costForTwoMessage}
                <p className="p-2 text-orange-600 underline text-lg font-semibold">
                  {restaurantDetail.card.card.info.cuisines.join(",")}
                </p>
              </p>

              <p className="text-sm font-light">
                {" "}
                <span className="font-semibold text-lg">Outlet : </span>{" "}
                {restaurantDetail.card.card.info.areaName},
                {resInfo.cards[2].card.card.info.city}
              </p>
              <p className="text-sm font-light">
                <span className="font-semibold text-lg"> Delivery in : </span>{" "}
                {restaurantDetail.card.card.info.sla.slaString}
              </p>
            </div>
          </div>

          <div className="m-3 p-3 text-center">
            <h2 className="text-2xl font-bold my-2">Menu</h2>
          </div>

          <hr className="w-full mx-auto" />
          <div className="">
            {categories?.map((category, index) => (
              <RestrauntCategories
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        <ShimmerAccordion />
      )}
    </>
  );
};

export default RestrauntMenu;
