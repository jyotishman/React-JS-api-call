import React from "react";

export default function RenderProductItem(props) {
  return (
    <div className="product-item-container">
      <img src={props.data.thumbnail_url} />
      <h3>{props.data.name}</h3>
      <p className="price">
        <span className="oprice">INR {props.data.price}</span>
        <span className="dprice">INR {props.data.discounted_price}</span>
      </p>
    </div>
  );
}
