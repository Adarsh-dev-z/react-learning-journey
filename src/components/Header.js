import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  let [btnNameReact, setBtnNameReact] = useState("Login")
  const {loggedInUser}= useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);
  console.log("cart from rdx", cartItems)

  const onlineStatus = useOnlinStatus();
    return (
      <div className="flex justify-between bg-orange-400 shadow-lg m-2 md:bg-orange-300 lg:bg-orange-500">
        <div className="logo-container">
          <img
            className="w-40"
            src= {LOGO_URL}
            alt="Logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-5 m-5">
            <li className="mr-5">
              Online Status: {onlineStatus ? "online" : "ofline"}
            </li>
            <li className="mr-5">
             <Link to="/"> Home</Link>
              </li>
              <li className="mr-5">
                <Link to="/grocery">Grocery</Link>
              </li>
            <li className="mr-5">
              <Link to ="/about">About Us</Link>
              </li>
            <li className="mr-5">
              <Link to= "/contact">Contact</Link>
              </li>
              
            <li className="mr-5 font-bold text-xl">
              <Link to="/cart">Cart ({cartItems.length}) Items</Link>
              </li>

            <button className="login" onClick={()=>{ btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}}>{btnNameReact}</button>
            <li className="mr-5 font-bold">{loggedInUser}</li>

          </ul>
        </div>
      </div>
    );
  };

  export default Header;