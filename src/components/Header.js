import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus(); // Fetch online status from custom hook

  const { loggedInUser } = useContext(userContext);

  
  // Subscribe to The Store uSing Selector
  const cartItem = useSelector((store) => store?.cart?.items);
  console.log(cartItem);
  
  return (
    <div className="flex justify-between items-center p-4 bg-gray-600 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="h-12 w-12" src={LOGO_URL} alt="Logo" />
        <span className="text-white text-lg font-semibold ml-2">
          Food Ordering App
        </span>
      </div>
      {/* DONE ka OK Boss okkk fuck tou YOIU tOOOO thank you Byeeeeeeeeeee */}

      {/* Navigation Items */}
      <div className="flex space-x-4">
        <ul className="flex space-x-6 items-center">
          <li className="text-white">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/" className="text-white hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-yellow-300">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="text-white hover:text-yellow-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="text-white hover:text-yellow-300">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:text-yellow-300" >
              Cart ({cartItem?.length}  Items)
            </Link>
          </li>
          <li className="font-semibold">{loggedInUser}</li>
        </ul>

        {/* Login Button */}
        <button
          className="px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-400 transition duration-300"
          onClick={() => {
            btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
