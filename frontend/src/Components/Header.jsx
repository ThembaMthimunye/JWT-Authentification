import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex justify-between bg-slate-700 py-4 text-white px-8">
      <h1 className="text-2xl">MERN Auth</h1>
      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-2">
          <p>Sign In</p>
          {/* <Link to="/sign-in"> */}
            <FaSignInAlt className="text-xl" />
          {/* </Link> */}
        </div>
        <div className="flex items-center gap-2">
          <p>Sign Up</p>
          {/* <Link to="/signup"> */}
            <PiSignIn className="text-xl" />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
