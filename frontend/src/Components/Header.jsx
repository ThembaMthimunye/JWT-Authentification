import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex justify-between bg-slate-700 py-4 text-white px-8">
      <Link to="/">
        <h1 className="text-2xl">MERN Auth</h1>
      </Link>
      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-2">
          <Link to="/sign-in">
            <div className="flex items-center gap-2">
              <p>Sign In</p>
              <FaSignInAlt className="text-xl" />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/register">
            <div className="flex items-center gap-2">
              <p>Sign Up</p>
              <PiSignIn className="text-2xl" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
