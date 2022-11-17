import { NavLink } from "react-router-dom";
import "../components/css/ProductBlock.css";
function ProductBlock({ id, title, price, rating }) {
  return (
    <div className="productShortHand">
      {id}
      "Name: {title}"" "Price: {price}" "Rating: {rating}"
      <NavLink to={`/details/${id}`}>Show Details</NavLink>
    </div>
  );
}

export default ProductBlock;
