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
        <form class="search-bar">
          <input id="search-bar" type="search" />
        </form>
      </div>
      <div className="icons">
        <CiUser className="icon" />
        <FiShoppingCart className="icon" />
        <BsHeart className="icon" />
      </div>
    </div>
  );
}
export { Navbar };
