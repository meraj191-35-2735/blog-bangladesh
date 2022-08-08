import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen min-w-fit flex justify-center items-center">
      <div
        className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
