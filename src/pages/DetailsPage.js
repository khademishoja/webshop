import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import Footer from "../components/Footer.js/Footer";
const DetailsPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:4000/products/${id}`);
      // console.log(response.data);
      setProduct(response.data);
    };
    getProduct();
  }, []);
  console.log(product);

  return (
    <div>
      <h1>Details Page</h1>
      {!product ? (
        "Loading..."
      ) : (
        <div className="container">
          <div className="card">
            <img src={product.mainImage} alt="product pic" width="200" />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>€{product.price}</p>
              <p>ratings: {product.rating}</p>
              <p className="discription">{product.description}</p>
              <div>
                <button className="btnAdd">
                  {" "}
                  <AiOutlineShoppingCart />
                  {"   "} Add to Cart
                </button>{" "}
                {"  "}
                <button className="btnFav">
                  {" "}
                  <MdFavoriteBorder />
                  favorites
                </button>
              </div>
              <div>Categories : {product.category.title}</div>
              <div>
                <div className="icons">
                  share <SiFacebook className="icon" />{" "}
                  <SiInstagram className="icon" />{" "}
                  <BsTwitter className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailsPage;
