import React, { useState } from 'react'

const About = () => {
const [firstItem,secondItem] = useState(0);


  function increaseNumber(){
      secondItem(firstItem +1);
    }


  return (
    <>
    <h1>{firstItem}</h1>
    <button onClick={increaseNumber}>+</button>
  </>
  )
}

export default About


