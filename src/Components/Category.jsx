import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Navbar'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Category = () => {
  const {name} =useParams()
  
  const [data,setData] = useState([])

  useEffect(()=>
  {
    const fetchData= async() =>
    {
      const api  =  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
      const data = await api.json();
     
  

    setData(data.meals)
     
    }
    fetchData();
    
  },[name])
  

  
  return (
    <>
    <Navbar />
    <div className='box'>
    {
      data.map((d)=>{
        return(
          
      <Link to={`/${d.idMeal}`} key={d.idMeal} className='Clink'>
          <div className='tool'>
            <div className='imgn'>
              <img  src={d.strMealThumb} alt="" />

            </div>
            <h2>{d.strMeal}</h2>
          </div>
          </Link>

        )
      })
    }
    </div>
  
  
    </>
  )
}

export default Category
