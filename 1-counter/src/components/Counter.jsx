import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count,setcount]=useState(0);
    
  return (

    <div className='counter-container'>
        <p id='para'>you have cliked {count} times </p>
        <button id='button' onClick={()=>{setcount(count+1)}}>click me</button>
      
    </div>
  )
}

export default Counter
