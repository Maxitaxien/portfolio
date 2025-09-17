import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav id="header">
        <Link to="/">Home</Link> | {" "}
        <Link to="/contact">Contact</Link> | {" "}
      </nav>

      <Outlet />
      <div id="footer">
        <p>2025 © Max Bakke Seymour</p>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default App
