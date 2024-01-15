import { Link, Outlet } from "react-router-dom"

export const ProductsPage = () => {
    return (
        <div>
            <p>ProductsPage</p>
            <Link to="new">New</Link>
            <Link to="featured">Freatures</Link>
            <Outlet/>
        </div>
    )
}
