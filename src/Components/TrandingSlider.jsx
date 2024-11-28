import React, { useState,useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'
import ShimmerTol from './ShimmerTol';
const TrandingSlider = () => {
  const [data,setData] = useState([])
  const [Loading,setLoading] = useState(true)

  useEffect(()=>
  {
    const fetchData= async() =>
    {
      const api  =  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      const data = await api.json();
  
      setData(data.meals.slice(0,8));
      setLoading(false)

    }
    fetchData();
    
  },[])

  
  return (
    <>
     <div className="tol">
        <h1>Trending Food</h1>
      </div>

      <div className="box1">
        {Loading ? (
          // Render shimmer placeholders while loading
          [...Array(8)].map((_, index) => (
            <div className="tool" key={index}>
              <ShimmerTol />
            </div>
          ))
        ) : (
          // Render actual data after loading
          data.map((d) => (
            <Link to={`/${d.idMeal}`} key={d.idMeal} className="Clink">
              <div className="tool">
                <div className="imgn">
                  <img src={d.strMealThumb} alt={d.strMeal} />
                </div>
                <h2>{d.strMeal}</h2>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  )
}

export default TrandingSlider
