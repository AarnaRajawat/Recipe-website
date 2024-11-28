import React, { useState,useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'
import Shimmer from './Shiimerparsel/Shimmer';


const PopularSlider = () => {
  const [data,setData] = useState([])
  const[Loading,SetLoading] = useState(true)

  useEffect(()=>
  {
    const fetchData= async() =>
    {
      const api  =  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      const data = await api.json();
     
      setData(data.meals)
      SetLoading(false)
      

    }
    fetchData();
    
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    slidesToScroll: 1
  };
  return (
    <>

<div className="Content">
        <div className="slider-container">
          {Loading ? (
            // Render multiple Shimmer placeholders during loading
            <Slider {...settings}>
              {[...Array(3)].map((_, index) => (
                <div key={index} className="slider">
                  <Shimmer />
                </div>
              ))}
            </Slider>
          ) : (
            // Render actual data after loading is complete
            <Slider {...settings}>
              {data.map((d) => (
                <Link to={`${d.idMeal}`} key={d.idMeal}>
                  <div className="slider">
                    <img
                      src={d.strMealThumb}
                      alt={d.strMeal}
                      height={80}
                    />
                  </div>
                </Link>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
   
  )
}

export default PopularSlider
