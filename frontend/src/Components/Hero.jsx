import React from "react";

const Hero = () => {
  return (
    <div className="bg-slate-100 rounded-md border-solid border-2 border-slate-400  flex justify-center flex-col mx-[30rem] items-center px-10 py-4 space-y-6 mt-20">
      <h1 className="text-3xl font-bold">MERN Authentication</h1>
      <p>
      Node.js allows developers to use JavaScript for both frontend and backend development, which simplifies development and increases productivity. It's also well-suited for building scalable and high-performance applications.


      </p>
      <div className="flex gap-4 text-white">
        <button className="border-solid border-2 border-blue-500 px-2 bg-blue-500 rounded-md">
          Sign In
        </button>
        <button className="border-solid border-2 border-slate-500 px-2 bg-slate-500 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Hero;
