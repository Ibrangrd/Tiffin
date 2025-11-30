import { CDN_URL } from "../utils/constant";

const stylecards = {
    backgroundColor: "#f0f0f0",
}
const RestaurantCard = (props) => {
    const {resData} = props;

    const { name, cuisines, avgRating, costForTwo, areaName, sla , cloudinaryImageId} = resData?.info;
    
    return (
      <div data-testid="res-card"
      className="w-72 m-3 mx-7 sm:mx-3 my-6 p-3 rounded-xl hover:shadow-lg border-gray-300 border-2 cursor-pointer" >
        
        <img className="w-full h-56 rounded-lg" src={CDN_URL + cloudinaryImageId} alt="" />
        <div className="my-3 rounded-lg text-gray-800 font-bold">{name} </div>
        <div className='my-1 rounded-lg font-semibold'>⭐ {avgRating} • {sla.slaString}</div>
        <p className='my-1 rounded-lg break-words text-gray-500'>{cuisines.slice(0,3).join(",")}</p>
        <p className='my-1 rounded-lg break-words text-gray-500'>{areaName}</p>
        <div className='my-8'>
        <div className='my-2 rounded-lg font-semibold '>
           {costForTwo}
        </div>
        </div>

      </div>
    );
  };


  export const withVegLabel = (RestaurantCard) =>{

    return(props) =>{
      return(
        <div>
          <label className="absolute bg-green-500 text-white ml-4 p-2 rounded-lg text-sm">Veg Only</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }


  export default RestaurantCard;