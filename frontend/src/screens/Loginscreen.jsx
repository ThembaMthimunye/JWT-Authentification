import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/usersApislice";
import { setCredentials } from "../../slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/"); // Redirect to homepage if user is logged in
    }
  }, [userInfo, navigate]); // Using `userInfo` as dependency is sufficient

  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      setError(err?.data?.message || err.error);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-center mt-[10rem] border-solid border-2 rounded-md mx-auto max-w-[400px] px-8 space-y-4 py-8"
    >
      <div className="flex flex-col space-y-1">
        <h1 className="text-3xl font-semibold py-4">Sign In</h1>
        <label htmlFor="email" className="font-medium ">
          Email Address
        </label>
        <input
          className="w-full border-solid border-2 rounded-md px-2"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="password" className="font-medium ">
          Password
        </label>
        <input
          className="w-full border-solid border-2 rounded-md px-2"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && (
        <div className="text-red-500 text-sm mt-2">
          <p>{error}</p>
        </div>
      )}
      <button
        type="submit"
        className="border-solid border-2 border-blue-500 px-2 bg-blue-500 rounded-md w-full text-white py-2"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Sign In"}
      </button>

      <div className="mt-4 text-center">
        <p>
          New Customer?{" "}
          <Link to="/register" className="text-blue-900 underline">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
