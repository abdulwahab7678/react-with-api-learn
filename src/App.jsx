import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <Link to="/comments">Go To Comments</Link>
      <Outlet />
    </div>
  )
}

export default App
