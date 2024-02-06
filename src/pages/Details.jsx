import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';
import { recipeContext } from '../context/recipeContext';
import { Heart } from 'lucide-react';

function Details() {
  const {id} = useParams();
  const {recipeDetails, setRecipeDetails, addToFavorite} = useContext(recipeContext);
   
  useEffect(() =>{
    async function getRecipeDetails(){
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data  = await res.json();
      if(data?.data){
        setRecipeDetails(data?.data);
      }
    }
    getRecipeDetails();
    console.log(recipeDetails)
  }, [id])
  return (
    <>
    <div className='flex flex-col lg:flex-row md:flex-row justify-between my-5 p-4 gap-5'>
      <div className='rounded-lg aspect-auto bg-gray-50 object-cover w-full lg:w-1/2 md:w-1/2  lg:h-[600px] xl:aspect-[16/9] m-auto max-h-80 overflow-hidden bg-center'>
        <img className='min-h-full min-w-full hover:scale-105 duration-200' src={recipeDetails?.recipe?.image_url} alt="" />
      </div>
      <div className='lg:w-1/2 flex flex-col mx-3 gap-4'>
        <span className='text-2xl font-semibold' >{recipeDetails?.recipe?.title}</span>
        <span className='text-sm font-semibold text-orange-500' >{recipeDetails?.recipe?.publisher}</span>
        <span className='text-sm font-semibold' >Time: {recipeDetails?.recipe?.cooking_time} min.</span>
        <div className=''>
          <button className='font-semibold text-sm bg-gray-800 text-white py-2 rounded-md px-3 flex gap-2 justify-center hover:bg-gray-700 hover:text-red-500'
          onClick={() => addToFavorite(recipeDetails.recipe)}> <Heart className='text-red duration-150 hover:fill-red-500 hover:text-red-500'  />Save as Favorite</button>
        </div>
      </div>
    </div>
    <div className='mx-4 my-2'>
      <div>
        <h1 className='text-2xl font-semibold my-3'>Ingrendients:</h1>
      </div>
      {recipeDetails?.recipe?.ingredients?.map(ingredient => {
        return(
          <li >
            <span className='text-lg text-gray-800'>{ingredient?.quantity}</span>
            <span className='text-lg text-gray-800 '>{ingredient?.unit} </span>
            <span className='text-lg text-gray-800'>{ingredient?.description} </span>
          </li>
        )
      })}
    </div>
    </>
  )
}
/*
recipe: 
cooking_time: 60
id: "5ed6604591c37cdc054bcce7"
image_url: "http://forkify-api.herokuapp.com/images/2295946365_d753a3a686_ocef6.jpg"
ingredients: 
Array(7)
0: {quantity: 2, unit: '', description: 'whole granny smith apples'}
1: {quantity: 2, unit: '', description: 'cans crescent rolls'}
2: {quantity: 2, unit: '', description: 'sticks butter'}

publisher: 
"The Pioneer Woman"
servings: 4
source_url: 
"http://thepioneerwoman.com/cooking/2008/02/apple_dumplings/"
title: 
"Apple Dumplings"
*/
export default Details
