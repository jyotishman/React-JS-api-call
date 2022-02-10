import logo from "./logo.svg";
import "./App.css";
import axios from "axios"; //es6 syntax
import { useEffect, useState } from "react";
import RenderProductData from "./renderProductData";
//this line is bascially es5 syntax
// const axios = require('axios').default;

//parent component
function App() {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0"
      )
      .then((data) => {
        setProductData(data.data);
      });
    // fetch(
    //   "https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0"
    // )
    //   .then((data) => {
    //     return data.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
  }, []);

  return (
    <div className="App">
      <h1>Ecommerce Application</h1>
      {/* child component- pass data through props */}
      {productData && <RenderProductData data={productData.store_items} />}
      {/* child component will be rendered once we have some data inside productdata */}
    </div>
  );
}

export default App;
