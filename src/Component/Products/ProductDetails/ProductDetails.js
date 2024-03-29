import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const singleProduct = data.find((p) => p._id === id);
        setProduct(singleProduct);
      });
  }, []);

  return (
    <>
      <div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 ">
              <img className="w-100" src={product.img} alt="" />
            </div>
            <div className="col-md-6 p-5">
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <p style={{ color: "#ba933e" }}>{product.price}</p>
              <hr />
              <div className="pt-3 pb-3">
                {" "}
                <h3 style={{ color: "#ba933e" }} className="text-center">
                  Shipping & Returns
                </h3>
                <h5 className="pt-3">Returns Policy</h5>
                <p>
                  You may return most new, unopened items within 30 days of
                  delivery for a full refund. We'll also pay the return shipping
                  costs if the return is a result of our error (you received an
                  incorrect or defective item, etc.). You should expect to
                  receive your refund within four weeks of giving your package
                  to the return shipper, however, in many cases you will receive
                  a refund more quickly. This time period includes the transit
                  time for us to receive your return from the shipper (5 to 10
                  business days), the time it takes us to process your return
                  once we receive it (3 to 5 business days), and the time it
                  takes your bank to process our refund request (5 to 10
                  business days). If you need to return an item, simply login to
                  your account, view the order using the 'Complete Orders' link
                  under the My Account menu and click the Return Item(s) button.
                  We'll notify you via e-mail of your refund once we've received
                  and processed the returned item.
                </p>
                <h5 className="pt-3">Shipping</h5>
                <p>
                  {" "}
                  We can ship to virtually any address in the world. Note that
                  there are restrictions on some products, and some products
                  cannot be shipped to international destinations. When you
                  place an order, we will estimate shipping and delivery dates
                  for you based on the availability of your items and the
                  shipping options you choose. Depending on the shipping
                  provider you choose, shipping date estimates may appear on the
                  shipping quotes page. Please also note that the shipping rates
                  for many items we sell are weight-based. The weight of any
                  such item can be found on its detail page. To reflect the
                  policies of the shipping companies we use, all weights will be
                  rounded up to the next full pound.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
