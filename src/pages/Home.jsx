// import React from 'react'
import { useNavigate } from "react-router-dom"
import "../App.css"

export const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <p>Home Page</p>
      <button onClick={() => {
        return navigate("/orderSummary"); 
      }}>Place Order</button>
    </div>

  )
}
