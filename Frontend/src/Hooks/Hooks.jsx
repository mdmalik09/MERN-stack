import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Hook = () => {
  return (
    <div>
        <ol>
            <li><Link to="useState">UseState</Link></li>
            <li><Link to="useEffect">UseEffect</Link></li>
            <li><Link to="useEffectApi">UseEffectApi</Link></li>
            <li><Link to="useRef">UseRef</Link></li>
            <li><Link to="useReducer">useReducer</Link></li>



        </ol>
        <Outlet/>  {/* <Outlet/>    //child componnets will display here */}
    </div>
  )
}

export default Hook