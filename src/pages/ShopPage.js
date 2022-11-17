import { useEffect, useState } from "react";
import axios from "axios";

import ProductBlock from "../components/ProductBlock";

// function compare_name(patient_a, patient_b) {
//   return patient_a.lastName.localeCompare(patient_b.lastName);
// }

function ProductsPage() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    async function getProducts() {
      const productResponse = await axios.get("http://localhost:4000/products");
      setProducts(productResponse.data);
    }
    getProducts();
  }, []);

  // const patients_sorted = [...patients].sort(compare_name);

  console.log(products, "sorted");
  return (
    <div>
      <h1>All Products</h1>
      {products ? (
        products.map((patientObj) => (
          <ProductBlock
            title={patientObj.title}
            price={patientObj.price}
            description={patientObj.description}
            rating={patientObj.rating}
            mainImage={patientObj.mainImage}
            createdAt={patientObj.createdAt}
            updatedAt={patientObj.updatedAt}
            categoryId={patientObj.categoryId}
          />
        ))
      ) : (
        <p>Loading ..</p>
      )}
    </div>
  );
}
// <div>
//   <ProductBlock />
// </div>

//   {products ? (
//     products.map((patientObj) => (

//       //   firstName={patientObj.firstName}
//       //   lastName={patientObj.lastName}
//       //   PatientId={patientObj.id}
//       //   Dob={patientObj.dateOfBirth}
//       // />
//     ))
//   ) : (
//     <p>Loading ..</p>
//   )}
// </div>
//   );
// }

export default ProductsPage;
