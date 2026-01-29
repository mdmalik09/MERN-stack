
import React, { useState } from 'react'

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Password : </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup
