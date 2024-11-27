import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [corfirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    // Password match validation
    if (password !== corfirmpassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); // Clear error message
    console.log("Submitted");
    // Proceed with registration logic (e.g., API request)
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-center mt-[10rem] border-solid border-2 rounded-md mx-auto max-w-[400px] px-8 space-y-4 py-8"
    >
      <h1 className="text-3xl font-semibold py-4">Register</h1>

      {/* Name Input */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          id="name"
          className="w-full border-solid border-2 rounded-md px-2 py-1"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="font-medium">
          Email Address
        </label>
        <input
          id="email"
          className="w-full border-solid border-2 rounded-md px-2 py-1"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password Input */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          id="password"
          className="w-full border-solid border-2 rounded-md px-2 py-1"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Confirm Password Input */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="confirm-password" className="font-medium">
          Confirm Password
        </label>
        <input
          id="confirm-password"
          className="w-full border-solid border-2 rounded-md px-2 py-1"
          type="password"
          placeholder="Confirm Password"
          value={corfirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Submit Button */}
      <button className="border-solid border-2 border-blue-500 px-2 py-1 bg-blue-500 rounded-md w-full text-white">
        Sign Up
      </button>

      {/* Login Link */}
      <div>
        <p>
          Already have an account?{" "}
          <Link to={"/sign-in"}>
            <span className="text-blue-900 underline ml-2">Login</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
