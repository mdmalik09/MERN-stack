
import React, { useEffect, useState, useRef } from 'react';

const UseRef = () => {
  const [count, setCount] = useState(0);
  const value = useRef(0);
  const inputRef = useRef();
  useEffect(()=>{
    setTimeout(() => {
      setCount(count+1)
      
    }, 2000);
  },[count])


  useEffect(() => {
    value.current = value.current + 1;
  });
  const handleClick = ()=>{
    inputRef.current.focus();
    
  }

  return (
    <div>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <p>{`${value.current} times component rendered`}</p>
      <input type = "text" ref = {inputRef}></input>
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default UseRef;
