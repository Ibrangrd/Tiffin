import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartReduxStoreSlice";
import { toast } from "react-hot-toast";

const CategoriesItemList = (props) => {
  const { items } = props;

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success("Item added to the cart");
  };

  return (
    <>
      {items?.map((item) => (
        <div
          data-testid="menu-item"
          key={item?.card?.info?.id}
          className="flex flex-wrap md:flex-nowrap justify-between border-b border-slate-300 m-2 "
        >
          <div className="m-2 sm:w-9/12 p-2">
            <p className="m-1 my-3 text-xs">
              {item.card.info.isVeg ? "🟩 Veg" : "🟥 Non-Veg"}
            </p>
            <p className="font-semibold m-1">{item.card.info.name}</p>
            <p className="m-1">- ₹ {item?.card?.info?.price
                ?item?.card?.info?.price / 100
                :item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-gray-500 m-1 text-sm">
                {item?.card?.info?.description}
            </p>
          </div>

          <div className='w-6/12 md:w-2/12 text-center mx-auto sm:mx-2 p-2'>
             <img src={CDN_URL + item?.card?.info?.imageId} className="w-full h-20 rounded-lg" alt="Item Image"/>
             <button onClick={()=>handleAddItem(item)} className='m-2 p-2 bg-green-500 text-sm text-white text-center shadow-lg rounded-lg hover:bg-green-600'>Add to cart</button>
          </div>

        </div>
      ))}
    </>

 
  );
};

export default CategoriesItemList;
