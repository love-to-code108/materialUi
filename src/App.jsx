// import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import './App.css'
import { Navbar } from "./components/Navbar"
import { OrderSummary } from "./pages/OrderSummary"
import { PageNotFount } from "./pages/PageNotFount"
import { ProductsPage } from "./pages/ProductsPage"
import { Freatures } from "./components/Freatures"
import { New } from "./components/New"
import { Users } from "./components/Users"

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/orderSummary" element={<OrderSummary />}></Route>
        <Route path="*" element={<PageNotFount />}></Route>

        {/* PRODUCT PAGE ROUTE */}
        <Route path="/products" element={<ProductsPage />}>
          <Route index element={<New/>}/>
          <Route path="featured" element={<Freatures />} />
          <Route path="new" element={<New />} />
        </Route>

        {/* USER ROUTE */}
        <Route path="/users" element={<Users/>}/>

        {/* DYNAMIC ROUTES */}
        <Route path="/users/:userId" element={<UserDetails/>} />
      </Routes>
    </div>
  )
}

export default App
