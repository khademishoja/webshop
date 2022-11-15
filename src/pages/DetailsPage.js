import axios from "axios";
import { useEffect, useState } from "react";

// import "./style.css";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [products, setProducts] = useState([]);
  const id = useParams;
  const getProducts = async () => {
    const res = await axios.get(`http://localhost:4000/products/${id}`);
    console.log(res.data);
    setProducts(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};
export default DetailsPage;
