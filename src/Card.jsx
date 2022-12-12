import React from 'react'
import {Link} from "react-router-dom"

const Card = ({meal}) => {
  return (
    <div className=' cursor-pointer h-80 border border-gray-400 rounded-md shadow-sm text-center w-56 px-5 py-4 relative transition-all duration-100 hover:scale-110 shadow-lg'>
        <div className=' flex-col gap-2 space-y-3 '>
            <img className='rounded-md w-52' src={meal.strMealThumb} alt="" />
            {
              
             `${meal.strMeal}`.length>40? <h1 className=' font-semibold text-base'>{meal.strMeal.substr(0,38)} .....</h1>
             :
              <h1 className=' font-semibold text-base'>{meal.strMeal}</h1>
              
            }
            
             <Link to={`/meal/${meal.idMeal}`}>
             <button className=' absolute bottom-4  bg-blue-900 rounded-md text-white w-24 px-2 py-1 hover:bg-black'>Detail</button>
             </Link>
            
        </div>
       
    </div>
  )
}

export default Card