import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <div className="container">
      <div>
      <Link className="btn btn-dark w-25 mb-2" to="/comments">Go To Comments</Link>
      <Link className="btn btn-dark w-25 mb-2" to='/albums'>Go To Albums</Link>
      <Outlet />
    </div>
    </div>
  )
}

export default App
