import { ArrowUpRight, Heart } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { recipeContext } from "../context/recipeContext";

function Card({ item }) {
  const { id, title, publisher, image_url, loading } = item;
  const { addToFavorite } = useContext(recipeContext);

  return loading ? (
    Loader
  ) : (
    <div className="w-[90%] lg:w-80 md:w-[300px] rounded-md border shadow-md my-3 mx-2">
     
      <img
        src={
          image_url
            ? image_url
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ432ju-gdS2nl6CEobTaFXEe6_gRmK5DkWuQ&usqp=CAU"
        }
        alt="img"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between">
          <Link to={`/recipe-item/${id}`} className="flex items-center">
          <h1 classNameclassName="flex items-center text-lg font-semibold">
            {title} &nbsp;
          </h1>
          <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Heart className=" hover:fill-red-500 text-red-500 cursor-pointer hover:scale-105 duration-100"
      onClick={() => addToFavorite(item)} />
        </div>
        <p className="mt-3 text-sm text-orange-500 font-semibold">
          {publisher}
        </p>

        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <Link to={`/recipe-item/${id}`} className=" block">
            Recipe details
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
