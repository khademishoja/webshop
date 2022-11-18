import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";
import ProductBlock from "../components/ProductBlock/ProductBlock";
import "./style.css";
import axios from "axios";
// import ProductBlock from "../components/ProductBlock/ProductBlock";
import SortingComponent from "../components/SortingComponent";
// const { id } = useParams();
const constant = 2;

function ProductsByCategory() {
  const [productsByCat, setProductsByCat] = useState([]);
  const [category, setCategory] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getElectronics() {
      const productResponse = await axios.get(
        `http://localhost:4000/category/${id}`
      );
      setProductsByCat(productResponse.data);
    }
    getElectronics();
  }, [id]);

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
        <div className="ProductList">
          <h1> Our Products!</h1>
          {productsByCat ? (
            productsByCat.map((product) => (
              <ProductBlock
                key={product.id}
                product={product}
                // id={electronicObj.id}
                // title={electronicObj.title}
                // price={electronicObj.price}
                // description={electronicObj.description}
                // rating={electronicObj.rating}
                // mainImage={electronicObj.mainImage}
                // createdAt={electronicObj.createdAt}
                // updatedAt={electronicObj.updatedAt}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/* <button onClick={nameSorter}> Sort By Name </button>    //SORT BY NAME BUTTON*/}
      </div>
    </div>
  );
}
// export { sortingNavbar };
export default ProductsByCategory;
