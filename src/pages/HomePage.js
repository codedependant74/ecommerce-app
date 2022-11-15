import React, { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getResponse();
  }, []);

  async function getResponse() {
    const res = await fetch("https://fakestoreapi.com/products?limit=4").then(
      (res) => res.json()
    );
    setProductData(await res);
  }

  const ShowProducts = () => {
    return (
      <>
        {productData.map((product, id) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center" key={product.id}>
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.title}
                    width="250px"
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                    <button className="btn btn-outline-dark">
                      <BsCartPlus size="1.8rem" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="my-4 py-3">
        <h1 className="display-3 fw-bolder">Nel's Closet</h1>
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Browsing through clothing rack"
          className="img-fluid"
        />
      </div>
      <div className="container my-5 py-5">
        <div className="row">
          <h2>Featured Products</h2>
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};

export default Home;
