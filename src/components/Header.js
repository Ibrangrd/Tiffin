import React, { useState } from "react";
import { LOGO_URL, LOGO_URL2, NAV_LINK_CROSS_URL, NAV_LINK_URL } from "../utils/constant";
import NavLinks from "./NavLinks";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const [btnNameReact, setBtnNameReact] = useState("Sign-Up / Login");
  const onlineStatus = useOnlineStatus();

  
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="bg-orange-300 shadow-md">
    <div className=" w-full flex justify-between p-2 h-20">
        <div className="p-1 flex">
            <img className="-m-1 p-0  ml-8 w-20 h-16 md:w-12 " src ={LOGO_URL2} alt="logo" />
            <h5 className="text-2xl  my-auto pl-8 text-center text-red-800">Tiffin </h5>
        </div>
        <div className="flex items-center">
             <ul className="hidden md:flex font-light gap-3 text-sm md:text-xl">
             <NavLinks/>
             </ul>
        </div>
        <div className="md:hidden p-2 w-12">
            <button onClick={()=>setShowNavLinks(!showNavLinks)}>
                {showNavLinks ?(<img src={NAV_LINK_CROSS_URL}/>):(<img src={NAV_LINK_URL}/>)}
            </button>
        </div>  
    </div>
    { showNavLinks ? (
        <ul className="font-light text-center w-full text-sm">
        <NavLinks/>
        </ul>
    ):("")}
    </div>


  );
};

export default Header;
