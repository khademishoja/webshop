import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";
import "./style.css";
import axios from "axios";
import ProductBlock from "../components/ProductBlock/ProductBlock";
// import ProductsByCategory from "./ProductsByCategory";
import SortingComponent from "../components/SortingComponent";
// import { sortingNavbar } from "../components/ProductBlock/ProductBlock";

// function compare_name(patient_a, patient_b) {
//   return patient_a.lastName.localeCompare(patient_b.lastName);
// }

// function ProductsByRating() {
//   const [productRating, setProductsByRating] = useState("");

//   useEffect(() => {
//     async function getProductsByRating() {
//       const ratingResponse = await axios.get(
//         "http://localhost:4000/products/rating"
//       );
//       setProductsByRating(ratingResponse.data.rating);
//     }
//     getProductsByRating();
//   });
// }

// function compare_number(productRating_a, productRating_b) {
//   return productRating_a.rating.localeCompare(productRating_b.rating);
// }

// const patients_sorted = [...patients].sort(compare_name);

// console.log(patients_sorted, "sorted");

//*********** SORT BY NAME */

// function compare_name(product_a, product_b) {
// return product_a.title.localeCompare(product_b.title);
// const [productNames, setProductsNames] = useState("");

// const [namesort, setNames] = useState(false);

// function nameSorter() {
//   setNames(true);
//   console.log(products, "products");

//   const products_sorted_name = [...products].sort(compare_name);
//   setProductsNames(products_sorted_name);
//   console.log(productNames, "products_sorted_name");
//
// }****************** END OF SORT BY NAME (1)

// const [ratedProducts, setProductsByRating] = useState("");

// useEffect(() => {
//   async function getProductsByRating() {
//     const ratingResponse = await axios.get(
//       "http://localhost:4000/products/rating"
//     );
//     setProductsByRating(ratingResponse.data);
//   }
//   getProductsByRating();
// }, []);

const constant = 3;

function ProductsPage() {
  const [products, setProducts] = useState("");
  const [category, setCategory] = useState("");
  // const { id } = useParams();

  useEffect(() => {
    async function getCategories() {
      const categoriesToSort = await axios.get(
        `http://localhost:4000/category`
      );
      console.log(categoriesToSort.data);
      setCategory(categoriesToSort.data);
      console.log(category);
    }
    getCategories();
  }, [constant]);

  useEffect(() => {
    async function getProducts() {
      const productResponse = await axios.get("http://localhost:4000/products");
      setProducts(productResponse.data);
    }
    getProducts();
  }, []);

  return (
    <div className="shopPageGreatParent">
      <div className="SortingSideBar">
        <h2> All sorts</h2>
        <div>
          {category ? (
            category.map((categoryObj) => (
              <SortingComponent
                key={categoryObj.id}
                id={categoryObj.id}
                title={categoryObj.title}
              />
            ))
          ) : (
            <p> Loading.. </p>
          )}
        </div>
        {/* <button onClick={nameSorter}> Sort By Name </button>    //SORT BY NAME BUTTON*/}
      </div>
      <div>
        <div className="ProductList">
          <h1> Our Products!</h1>
          {products ? (
            products.map((product) => (
              <ProductBlock
                key={product.id}
                product={product}
                // id={patientObj.id}
                // title={patientObj.title}
                // price={patientObj.price}
                // description={patientObj.description}
                // rating={patientObj.rating}
                // mainImage={patientObj.mainImage}
                // createdAt={patientObj.createdAt}
                // updatedAt={patientObj.updatedAt}
                // category={patientObj.category.title}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

// function RatingsPage() {
//   const [products, setProducts] = useState("");

//   useEffect(() => {
//     async function getProducts() {
//       const productResponse = await axios.get("http://localhost:4000/products");
//       setProducts(productResponse.data);
//     }
//     getProducts();
//   }, []);

//   // const patients_sorted = [...patients].sort(compare_name);

//   console.log(products, "sorted");
//   return (
//     <div className="shopPageGreatParent">
//       <div className="Sidebar">
//         <h2>SORTINGS</h2>
//         <p></p>
//       </div>
//       <div>
//         <h1>All Products</h1>
//         {products ? (
//           products.map((patientObj) => (
//             <ProductBlock
//               id={patientObj.id}
//               title={patientObj.title}
//               price={patientObj.price}
//               description={patientObj.description}
//               rating={patientObj.rating}
//               mainImage={patientObj.mainImage}
//               createdAt={patientObj.createdAt}
//               updatedAt={patientObj.updatedAt}
//               categoryId={patientObj.categoryId}
//             />
//           ))
//         ) : (
//           <p>Loading ..</p>
//         )}
//       </div>
//     </div>
//   );
// }

export default ProductsPage;
