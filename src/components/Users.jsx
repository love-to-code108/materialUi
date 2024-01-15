import { useSearchParams } from "react-router-dom"

export const Users = () => {

  const [params, setParams] = useSearchParams();
  const statusOfUser = params.get("filter") === "active website";
  console.log(statusOfUser);

  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>

      <div>
        <button onClick={() => setParams({ filter: "active" , tecxaro:"website" })}>Active users</button>
        <button onClick={() => setParams({})}>Reset Filter</button>
      </div>

      <div>
        {statusOfUser ? <h2>List of Active User</h2> : <h2>Filter removed</h2>}
      </div>
    </div>
  )
}
