import { useState } from 'react'
import Home from "./Components/Home"
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RecipeId from './Components/RecipeId'
import Category from './Components/Category'
import SearchElement from './SearchElement'
import NotFound from './Components/NotFound'


function App() {
 

  return (
    <>
    <Router>
      <Routes>
       
       <Route path='/' element={<Home />} />
       <Route  path='/:idMeal' element={<RecipeId />}/>
       <Route  path='/category/:name' element={<Category />}/>
       <Route  path='/search/:searchTerm' element={<SearchElement />}/>
       <Route path="*" element={<NotFound />} /> 
</Routes>

    </Router>
   

    

      </>
  )
}

export default App
