import React, { useState } from 'react'
import { Form, Link,useNavigate } from 'react-router-dom'



const Navbar = () => {
  const[input,setInput] = useState('')
  const Navigate = useNavigate()
const handelSubmit= (e)=>{
  e.preventDefault();
 Navigate(`/search/${input}`)

}

  
  return (
    <>
     <div className='Nav'>
      <div className='left'>
        <Link to='/' className='link'>
      <h1 className="no-space">
  <span className="black-text">perfect</span>
  <span className="white-text">Recipe</span>
</h1>
</Link>
</div>


        <div className="search">
          <form onSubmit={handelSubmit}>
          <input type='text' onChange={(e)=>setInput(e.target.value)} />
          </form>
         
        </div>
        <div className="right">
          <Link  to={`/category/indian`} className='link'>
          <div>Indian</div>
          </Link>
         <Link to={`/category/american`} className='link'>
         <div>American</div>
         </Link>
          
          <Link to={`/category/british`} className='link'>
          <div>British</div>
          </Link>
          <Link className='link' to={`/category/chinese`}>
          <div>Chinese</div>
          </Link>
          <Link to={`/category/thai`} className='link'>
          <div>Thai</div>
          
          </Link>
          
        </div>


      

     </div>
      
</>
  )
}

export default Navbar
