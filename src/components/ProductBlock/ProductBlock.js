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
function ProductBlock({ product }) {
  return (
    <div className="productBox">
      <div className="productSnippet">
        <div className="productThumbnail">
          <img src={product.mainImage} alt="product pic"></img>
        </div>
        <div className="productSummary">
          <p>{product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>

          <NavLink className="Navlink" to={`/details/${product.id}`}>
            Show Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}
// export { sortingNavbar };
export default ProductBlock;
