import React, { useEffect, useState } from 'react'

const UseEffect = () => {
   const [count,secondItem] = useState(0)       
   const [count1,like] = useState(0)
    // useEffect(()=>{
    //  console.log("hello world")
    // },[])
    useEffect(()=>{
        console.log("hello worlddd")
    },[count])
    
    function increaseCount(){
    secondItem(count+1);
        console.log(count)
    }
  return (
    <>
    <h1>{count1}</h1>
<button onClick={increaseCount}> + </button> 
</> )
}

export default UseEffect





// Execution on initial render,first time page render huda or load huda

// useEffect(()=>{

// },[])



// execution on the inital render + when the dependency array value changes 
// (first load ma pani execution huncha rw dependency array ko state change huda ni hunxa)


// useEffect(()=>{

// },[state1,state2]);







// executes on every re render 
// useEffect(()=>{

// })













// note:- Hook garda jaila pani function vanda mathi hunxa