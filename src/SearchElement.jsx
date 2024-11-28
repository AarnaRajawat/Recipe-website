import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ShimmerTol from './Components/ShimmerTol';

const SearchElement = () => {
  const { searchTerm } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const result = await api.json();


        if (!result.meals) {
          
          alert("this Recipe are not available sorry") 
        } else {
          setData(result.meals);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/404'); 
      }

      setIsLoading(false);
    };

    fetchData();
  }, [searchTerm, navigate]);

  if (isLoading) {
    return <div><ShimmerTol/></div>; 
  }

  return (
    <>
      <Navbar />
      <div className="box">
        {data.map((d) => (
          <Link to={`/${d.idMeal}`} key={d.idMeal} className="Clink">
            <div className="tool">
              <div className="imgn">
                <img src={d.strMealThumb} alt={d.strMeal} />
              </div>
              <h2>{d.strMeal}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SearchElement;
