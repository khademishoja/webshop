// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import React from "react";
// import "./style.css";
// import axios from "axios";
// import ProductBlock from "../components/ProductBlock/ProductBlock";

// function ProductsByCategory() {
//   const [ratedProducts, setProductsByRating] = useState("");

//   useEffect(() => {
//     async function getProductsByRating() {
//       const ratingResponse = await axios.get(
//         "http://localhost:4000/products/rating"
//       );
//       setProductsByRating(ratingResponse.data);
//       console.log(ratingResponse.data.rating);
//     }
//     getProductsByRating();
//   }, []);
//   console.log(ratedProducts, "sorted");
//   return (
//     <div className="shopPageGreatParent">
//       <div className="Sidebar">
//         <h2>SORTINGS</h2>
//         <button onClick=""></button>
//       </div>
//       <div>
//         <h1>Our Products!</h1>
//         <div>
//           {ratedProducts ? (
//             ratedProducts.map((patientObj) => (
//               <ProductBlock
//                 id={patientObj.id}
//                 mainImage={patientObj.mainImage}
//                 title={patientObj.title}
//                 price={patientObj.price}
//                 description={patientObj.description}
//                 rating={patientObj.rating}
//               />
//             ))
//           ) : (
//             <p>Loading ..</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ProductsByCategory;
