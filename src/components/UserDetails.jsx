import { useParams } from "react-router-dom"

export const UserDetails = () => {

  const { userId } = useParams();
  

  return (
    <div>
        <h1>Details of User {userId}</h1>
    </div>
  )
}
