import React from "react";

const Products = (props) => {
  return (
    <>
      <div className="products">Related Products</div>

      <div className="product-list">
        <div className="product-contents">
          <img src="うすしお.png" alt="potatochips" />
          <p>{props.message}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
