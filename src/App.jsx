// import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import './App.css'
import { Navbar } from "./components/Navbar"
import { OrderSummary } from "./pages/OrderSummary"

function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/orderSummary" element={<OrderSummary />}></Route>
      </Routes>
    </div>
  )
}

export default App
