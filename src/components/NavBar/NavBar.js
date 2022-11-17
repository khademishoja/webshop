import "./Style.css";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar-container ">
      <div className="navMiddle">
        <span style={{ color: "black" }}>Alex</span>
        <span style={{ color: "white" }}>Morteza</span>
      </div>
      <div id="linkNavbar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </div>
      <div>
        <form className="search-bar">
          <input id="search-bar" type="search" />
        </form>
      </div>
      <div className="icons">
        <NavLink to="/login">
          <CiUser className="icon" />
        </NavLink>
        <FiShoppingCart className="icon" />
        <BsHeart className="icon" />
      </div>
    </div>
  );
}
export { Navbar };
