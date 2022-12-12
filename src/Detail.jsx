import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import {ImYoutube} from "react-icons/im"
import Loader from './Loader'
import Card from './Card'

const Detail = () => {

  const {id} = useParams();
  const [meal,setMeal] = useState([])
  
  const [loading,isLoading] = useState(true)

  const getSingleMeal = async() =>{
    const {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setMeal(data.meals)
    isLoading(false)
  }

  

  useEffect(()=>{
    getSingleMeal()
   
  },[])

  return (
   <>
   {loading?<Loader/>:
   <>
    <div className='pb-6'>
    {meal?.map(meal=>(
      <div className=' space-y-4'>
          <img className=' rounded-md' src={meal.strMealThumb} width={350} alt="" />
          <h1 className=' bg-pink-600 w-20 text-sm text-white text-center rounded-md'>{meal.strCategory}</h1>
          <h1 className=' font-bold text-2xl' key={meal.idMeal}>{meal.strMeal}</h1>
        <h1 className=' font-bold text-xl'>Intruction</h1>
          <h1 className=' text-sm leading-6 '>{meal.strInstructions}</h1>
          <div className='flex gap-3 items-center cursor-pointer'>
          <a href={meal.strYoutube} className=' text-red-700 text-4xl'><ImYoutube/></a>
          <a href={meal.strYoutube} className="hover:text-red-700" ><span className='font-semibold'>Watch On Youtube</span></a>
          </div>
      </div>
      
    ))}
  </div>
  
  </>
   }
   </>
  )
}

export default Detail