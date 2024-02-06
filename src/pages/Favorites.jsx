import React, { useContext } from 'react'
import { recipeContext } from '../context/recipeContext'
import Card from '../components/Card';
import Loader from '../components/Loader';

function Favorites() {
  const {favoritesList} = useContext(recipeContext);
  return (
    <div>
      {favoritesList.length <= 0 ? (
        <NothingToShow/>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center my-4">
          {favoritesList.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

function NothingToShow(){
  return (
    <div>
        <p className='text-5xl font-extrabold text-center'>add somthing to see here.</p>
    </div>
  )
}

export default Favorites
