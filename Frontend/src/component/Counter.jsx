import React, { useState } from 'react'

const Counter = () => {
        // const [count, setCount] = useState(0);
        const [count,setCount]=useState(0);
        const handleDecrement = ()=>{
}
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
  )
}

export default Counter1