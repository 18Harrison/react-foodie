import React from 'react'
import "./index.css"
import {Routes,Route} from "react-router-dom"
import Meal from './Meal'
import Detail from './Detail'
import Navar from './Navar'

 const App = () => {
  return (
  <div className='container mx-auto'>
      <Navar/>
      <Routes>
        <Route path='/' element={<Meal/>}/>
        <Route path='/meal/:id' element={<Detail/>}/>
       </Routes>
  
  </div>
      
  )
}

export default App
