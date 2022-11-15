import React, { useState, useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useCart } from "react-use-cart";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(data);
    if (componentMounted) {
      setData(await response.json());
      setLoading(false);
      console.log(setData);
    }
    return () => {
      componentMounted = false;
    };
  };
  useEffect(() => {
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProducts = () => {
    const { addItem } = useCart();
    // console.log(data);
    return (
      <>
        {data.map((product, id) => {
          console.log(product);
          const addToCart = (product) => {
            addItem(product.id, product.title, product.image, product.price);
          };
          return (
            <>
              <div className="col-md-3 mb-4" key={id}>
                <div className="card h-100 text-center" key={product.id}>
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.title}
                    height="250px"
                    width="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <button
                      onClick={() => {
                        addItem(data);
                        console.log("we're here");
                      }}
                      className="btn btn-outline-dark"
                    >
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
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-3 fw-bolder">Products</h1>
          <hr />
        </div>
      </div>
      <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
