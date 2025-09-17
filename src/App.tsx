import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="header">
        <Link to="/">Home</Link> | {" "}
        <Link to="/contact">Contact</Link> | {" "}
      </nav>

      <Outlet />
    </div>
  )
}

export default App
