import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const recipeContext = createContext({});

export default function ContextProvider({children}){
  const [search, setSearch] = useState('');
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [favoritesList , setFavoritesList] = useState([]);
  
  const notify = () => toast("added to the favorites");

  const handleSubmit = async(e) =>{
    try {
      
      e.preventDefault();
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
      const data  = await response.json();
      setRecipeData(data.data.recipes)
      setLoading(false);
      console.log(recipeData);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  function addToFavorite(recipe){
    const cpyFav = [... favoritesList];
    const index = cpyFav.findIndex(e => e.id === recipe.id);
    if(index === -1){
      cpyFav.push(recipe);
    }else{
      cpyFav.splice(index);
    }
    notify();
    setFavoritesList(cpyFav);
  }
  return(
    <recipeContext.Provider value={{
      search,
      setSearch, 
      loading,
      handleSubmit, 
      recipeData ,
      recipeDetails, 
      setRecipeDetails,
      favoritesList , 
      addToFavorite }}>
      {children}
    </recipeContext.Provider>
  )
}