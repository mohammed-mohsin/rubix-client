import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Products/Header/Header";
import SingleProduct from "../Component/Products/SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   console.log(products)
  return (
    <>
      <Header className="pb-5" />
      {
        <div className="container pt-5">
          <div className="row d-flex">
            {products.map((product) => (
              <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/product/${product._id}`}
                >
                  <SingleProduct key={product._id} product={product} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Products;
