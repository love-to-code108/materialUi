import { useNavigate } from "react-router-dom"

export const OrderSummary = () => {

  
    const navigate = useNavigate();


  


  return (
    <div>
      <p>Your Order has been confirmed</p>
      <button onClick={() => {
        navigate("/");

      }}>Go Back to Home Page</button>
    </div>
  )
}
