import "./Style.css";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer" style={{ padding: 30 }}>
      <div className="alexMorteza">
        <span style={{ color: "white" }}>Alex</span>
        <span style={{ color: "#8568FF" }}>Morteza</span>
      </div>
      <div>
        <ul className="list">
          <h3>Categories</h3>
          <li>Laptops and Computers</li>
          <li>Cameras and Photography</li>
          <li>Smart phones and Tablets</li>
          <li>VideoGames and Consoles</li>
          <li>Waterproof HeadPhones</li>
        </ul>
      </div>
      <div>
        <ul className="list">
          <h3> My Account</h3>
          <li> My Account</li>
          <li> Discount</li>
          <li> Returns</li>
          <li>Orders History </li>
          <li> Order Tracking</li>
        </ul>
      </div>
      <div>
        <h3>
          {" "}
          Follow Us <SiFacebook className="icon" />{" "}
          <SiInstagram className="icon" /> <BsTwitter className="icon" />
        </h3>
      </div>
    </div>
  );
};

export default Footer;
