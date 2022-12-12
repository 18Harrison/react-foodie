import React from 'react'
import {RiRestaurantFill} from "react-icons/ri"
import { Link } from 'react-router-dom'

const Navar = () => {
  return (
    <Link to={"/"}>
 <div className='flex items-center gap-1 my-4'>
    <div className='text-2xl text-red-700'><RiRestaurantFill/></div>
    <h1 className=' text-3xl text-red-900'>Foodie</h1>
   </div>
    </Link>
   
  )
}

export default Navar