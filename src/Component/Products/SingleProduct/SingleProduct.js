import React from "react";

const SingleProduct = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className="card border-0 rounded" style={{ padding: "20px", }}>
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="pt-4 text-dark">
        <h6 className="card-text">{name}</h6>
        <p>{price}</p>
        <button className="btn btn-dark w-100">View Products</button>
      </div>
    </div>
  );
};

export default SingleProduct;
