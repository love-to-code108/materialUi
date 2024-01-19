import { NavLink,Link } from "react-router-dom"

import "../App.css"
export const Navbar = () => {
    return (
        <nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/orderSummary">Order Summary</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/users">Users</NavLink>
            <Link to="/">Home Using Link</Link>
        </nav>

    )
}
