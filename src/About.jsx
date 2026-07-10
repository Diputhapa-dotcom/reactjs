import React, { useState } from 'react'

const About = () => {
    // const state = useState(0);
    // const firstItem = state[0]
    // const secondItem = state[1];
    const [number,setNumber] = useState(10)
    // const [num,setNum] = useState(0);
const increaseCount = ()=>{
    setNumber(number +1);

}
const decreaseCount = ()=>{
    setNumber(number - 1);

}
return (
    
  <div>
<h1>{number}</h1>

    <button onClick={increaseCount}>+ </button>
    <button onClick={decreaseCount}> - </button>

  </div>

 )
}

export default About