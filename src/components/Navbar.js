import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
