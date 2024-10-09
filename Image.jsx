import React from "react";
import Product from "../product";

const Image = () => {
  return (
    
      <img src={Product.imageUrl} alt="Product" style={{ maxWidth: "100%" }} />
    
  )
}

export default Image;
