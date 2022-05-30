import React from "react";
import { useNavigate } from "react-router-dom";
import ProductAll from "./ProductAll";

const ProductCard = ({ item }) => {
  return (
    <div>
      <img className="scale" src={item?.img} />
      <div>{item?.name}</div>
      <div>{item?.ripple} </div>
    </div>
  );
};

export default ProductCard;
