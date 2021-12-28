import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className="Navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/product">Product Detail</Link>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
