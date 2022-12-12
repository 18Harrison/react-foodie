import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'
import Loader from './Loader'

const Meal = () => {

   const [meals,setMeals] = useState([])
   const [loading,isLoading] = useState(true)
   const [catagories,setCatagories] = useState([])
   const [type,setType]   = useState("beef")

    const getMeal = async() => {
        const {data} = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`
        );
        
         setMeals(data.meals)
         isLoading(false)
    }

    const getCatagories = async()=>{
      const {data} = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      setCatagories(data.meals)
      
      
    }

    useEffect(()=>{
             getMeal()
             getCatagories()
    },[type])

    

  return (
   <>
   {loading?<Loader/>:
   <>
    <div className=' flex gap-4 flex-wrap mb-9 mt-9 ml-4  md:hidden'>
      <select  onChange={e=>setType(e.target.value)} >
      {catagories?.map(cat=>(
       <option defaultValue={"beef"} key={cat.idMeal}>{cat.strCategory}</option>
   ))}
      </select>

     </div>
     <div className='md:flex gap-4 flex-wrap mb-9 mt-9 hidden'>
{catagories?.map(cat=>(
    <button onClick={()=>{setType(cat.strCategory)}} className={`border border-black px-2 py-2 w-28   text-black hover:bg-black hover:border-black hover:text-white ${type==cat.strCategory&&"bg-green-500"}`} > {cat.strCategory}</button>
))}
     </div>
    <div className="flex flex-row gap-6 flex-wrap">
    {meals?.map(meal=>(
    <Card key={meal.idMeal} meal={meal}/>
))}
</div>
</>
   }
   </>
  )
}

export default Meal