import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-1/2 p-5">
        <div className="mt-8">
          <h1 className="text-5xl">404</h1>
          <h1 className="text-5xl font-extrabold">Page Not Found</h1>
          <p className="text-neutral-500 font-semibold my-4">
            The page you were looking for couldn't be found. It might have been
            moved or deleted. No worries, try using the search bar above or
            browse our homepage.
          </p>
        </div>
        <div className="flex gap-5">
          <button className="bg-gray-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow"
          onClick={() =>  window.history.back()}>
            Go Back
          </button>
          <Link className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded shadow"
          to={'/'}>
            Homepage
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1879.jpg?size=626&ext=jpg&ga=GA1.1.1513053482.1698847168&semt=ais"
          alt=""
        />
      </div>
    </div>
  );
}

export default NotFound;
