import React, { useEffect, useState } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_URL } from "../utils/constant";
import { toast } from "react-hot-toast";
import OfflineStatus from "./OfflineStatus";
import LoadingBar from "react-top-loading-bar";
import BodyScroller from "./BodyScroller";
import NotFound from "./NotFound";

const Body = () => {
  const [listofRestraunts, setListofRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [progress, setProgress] = useState(0);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestrauntCardVeg = withVegLabel(RestaurantCard);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    try {
      const data = await fetch(RES_URL);
      setProgress(50);
      const json = await data.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);

      setListofRestraunts(resData);
      setFilteredRestraunts(resData);
      setProgress(100);
    } catch (err) {
      console.log(err);
    }
  };

  const topRatedRestraunts = () => {
    setProgress(30);
    const topRatedList = filteredRestraunts.filter(
      (resData) => resData.info.avgRating >= 4.4
    );
    topRatedList.sort((a, b) => b?.info?.avgRating - a?.info?.avgRating);
    setFilteredRestraunts(topRatedList);
    toast("Top Rated Restraunts");
    setProgress(100);
  };

  const fastDelivery = () => {
    setProgress(30);
    const fastDeliveryList = filteredRestraunts.filter(
      (resData) => resData.info.sla.deliveryTime <= 30
    );
    setFilteredRestraunts(fastDeliveryList);
    toast("Fast Delivery Restraunts");
    setProgress(100);
  };

  const Only_Veg = () => {
    setProgress(30);
    const Nearby1km_RestrauntsList = filteredRestraunts.filter(
      (resData) => resData?.info?.veg == 1
    );
    setFilteredRestraunts(Nearby1km_RestrauntsList);
    toast("Only Veg Restraunts");
    setProgress(100);
  };

  const BtnSearch = () => {
    setProgress(30);
    const filteredRestraunts = listofRestraunts.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredRestraunts.length === 0) {
      setProgress(100);
      toast.error("No Data Found");
      setFilteredRestraunts(listofRestraunts);
    } else {
      setFilteredRestraunts(filteredRestraunts);
      toast("Search Result Found");
      setProgress(100);
    }
  };

  return (
    <>
      {onlineStatus ? (
        <>
          {listofRestraunts.length != 0 ? (
            <div>
              <LoadingBar
                color="#f11946"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
              />
             <div className="">
              <p className="text-2xl font-bold mt-8 p-2 text-center">
                What's on your mind?
              </p>
              <BodyScroller
                listOfRestaurant={listofRestraunts}
                filteredList={filteredRestraunts}
                setFilteredList={setFilteredRestraunts}
                setProgress={setProgress}
              />

              <div className="text-2xl font-bold mt-8 p-2"></div>
              <div className="flex flex-col">
              <div className="w-full flex flex-col gap-4 bg-white p-4 shadow-lg rounded-xl">
               
                <div className="flex flex-wrap justify-center gap-3 mt-2">
                  <button
                    data-testid="topRatedBtn"
                    onClick={topRatedRestraunts}
                    className="px-5 py-2 bg-orange-300 hover:bg-orange-500 text-black font-semibold rounded-full shadow-md transition-all"
                  >
                    ⭐ Top Rated
                  </button>

                  <button
                    onClick={fastDelivery}
                    className="px-5 py-2 bg-orange-300 hover:bg-orange-500 text-black font-semibold rounded-full shadow-md transition-all"
                  >
                    ⚡ Fast Delivery
                  </button>

                  <button
                    onClick={Only_Veg}
                    className="px-5 py-2 bg-green-300 hover:bg-green-500 text-black font-semibold rounded-full shadow-md transition-all"
                  >
                    🥗 Only Veg
                  </button>

                  <button
                    onClick={() => {
                      setProgress(30);
                      setFilteredRestraunts(listofRestraunts);
                      setProgress(100);
                      toast("All restaurants");
                    }}
                    className="px-5 py-2 bg-blue-300 hover:bg-blue-500 text-black font-semibold rounded-full shadow-md transition-all"
                  >
                    🍽️ All Restaurants
                  </button>
                </div>
                <div className="">
                <p className="flex justify-center text-3xl font-bold mt-8 p-2">Search Restaurants</p>
                <div className="flex justify-center sm:pl-14 pl-3 ">
                <input
                  type="text"
                  placeholder="Restaurant or Cuisine"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="border sm:w-1/3  rounded-lg border-orange-400 bg-transparent font-semibold active:border-none m-2 p-2"
                />{" "}
                <button
                  data-testid="searchBtn"
                  onClick={BtnSearch}
                  className="w-12 rounded-lg "
                >
                  {" "}
                  🔎{" "}
                </button>
                </div>
              </div>
              </div>
              </div>
              
              </div>
              
              {filteredRestraunts ? (
                <>
                  <p className="text-2xl font-bold mt-8 p-2 text-center">
                    Top restaurant chains in Vaishali
                  </p>
                  <div className="flex flex-wrap md:justify-center lg:justify-center justify-center ">
                    {filteredRestraunts.map((resData) => (
                      <Link
                        key={resData.info.id}
                        to={`/restraunts/${resData.info.id}`}
                      >
                        {resData.info.veg ? (
                          <RestrauntCardVeg resData={resData} />
                        ) : (
                          <RestaurantCard resData={resData} />
                        )}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <NotFound />
              )}
            </div>
          ) : (
            <Shimmer />
          )}
        </>
      ) : (
        <OfflineStatus />
      )}
    </>
  );
};

export default Body;
