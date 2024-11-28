import React from 'react'
import Navbar from './Navbar'
import TrandingSlider from './TrandingSlider'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Recipeld.css'



const RecipeId = () => {
    
    const {idMeal} = useParams()

    const [data,setData] = useState([])
    const [active,setActive] = useState('ingredient')
    

    useEffect(()=>
    {
      const fetchData= async() =>
      {
        const api  =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        const data = await api.json();
       
        setData(data.meals[0])
        console.log(data)
       
      }
      fetchData();
    },[idMeal])
  return (
    <div>
    <Navbar />

    <div className='Contino' >
      <h1>{data.strMeal}</h1>
      <div className='Flok'>
        
      <div className='imgah'>
        <img  src={data.strMealThumb}/>

      </div>
      
      <div className='buton'>
        <div className='btni'>
        <button className="btn" onClick={()=>setActive('ingredient')}>Ingredient</button>
        <button className="btn" onClick={()=>setActive('instruction')}>Instruction</button>
        </div>
        <div className='ingri'>
        {
          active === 'ingredient'?(
            
           <div>
  {Array.from({ length: 15 }, (_, index) => {
    const ingredient = data[`strIngredient${index + 1}`];
    const measure = data[`strMeasure${index + 1}`];
    
    return ingredient ? (
      <div key={index}>
        {ingredient} - {measure}
      </div>
    ) : null;
  })}
</div>

          ):(
            <div>
          <p>{data.strInstructions}</p>
        </div>

          )
        }
       </div>
        
        
      </div>
   
      
      </div>

    </div>
    <TrandingSlider />
    </div>
  )
}

export default RecipeId
