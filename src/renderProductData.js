import React from "react";
import RenderProductItem from "./renderProductItem";
import "./styles.css";

export default function RenderProductData(props) {
  return (
    <div>
      {props.data.map((item) => {
        return (
          <div className="product-container">
            <h1 className="category-name">{item.category.name}</h1>
            <div className="parent-item-container">
              {item.items.map((productData) => {
                return <RenderProductItem data={productData} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
