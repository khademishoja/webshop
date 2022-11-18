// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";

// function SortingComponent() {
//   const [category, setCategory] = useState("");
//   //   const { id } = useParams();

//     useEffect(() => {
//   async function getCategories() {
//     const categoriesToSort = await axios.get(`http://localhost:4000/category`);
//     setCategory(categoriesToSort);
//     console.log(category);
//   }
//   getCategories();
//     }, []);

//   return (
//     <div>
//       <h1>Sorting Component</h1>
//       <div>{category.data.title}</div>
//     </div>
//   );
// }
// // return (
// //     <div>
// //         <h1>Yallow</h1>
// //     <div> {category}</div>);}

// export default SortingComponent();

// // {
// /* // function ProductBlock({ id, title, price, rating, mainImage, category }) { */
// // }
// // {
// /* //   return (
// //     <div className="productBox">
// //       <div className="productSnippet">
// //         <div className="productThumbnail">
// //           <img src={mainImage} alt="product pic"></img>
// //         </div>
// //         <div className="productSummary">
// //           <p> Name: {title}</p>
// //           <p>Price: ${price}</p>
// //           <p>Rating: {rating}</p>
// //           <p>Category: {category}</p>
// //           <NavLink className="Navlink" to={`/details/${id}`}>
// //             Show Details
// //           </NavLink>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // // export { sortingNavbar };
// // export default ProductBlock; */
// // }

function CategorySorting({ id, title }) {
  return (
    <div className="SortingBox">
      <div className="productSnippet">
        <div className="productSummary">
          <p>
            {" "}
            <NavLink to={`/details/1`}>{title}</NavLink>
            {/* <NavLink to={`/category/${id}`}>{title}</NavLink> */}
          </p>
          {/* <NavLink className="Navlink" to={`/details/${id}`}>
              Show Details
            </NavLink> */}
        </div>
      </div>
    </div>
  );
}
// export { sortingNavbar };
export default CategorySorting;
