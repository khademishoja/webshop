import { NavLink } from "react-router-dom";
import "./ProductBlock.css";

// function sortingNavbar() {
//   return (
//     <div>
//       <h3> sort by: </h3>
//       <NavLink to="/brated">By Rating</NavLink>
//       <NavLink to="/category">By Category</NavLink>
//     </div>
//   );
// }
function ProductBlock({ id, title, price, rating, mainImage, category }) {
  return (
    <div className="productBox">
      <div className="productSnippet">
        <div className="productThumbnail">
          <img src={mainImage} alt="product pic"></img>
        </div>

        <div className="productSummary">
          <p> Name: {title}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <p>Category: {category}</p>
          <NavLink className="Navlink" to={`/details/${id}`}>
            Show Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}
// export { sortingNavbar };
export default ProductBlock;
