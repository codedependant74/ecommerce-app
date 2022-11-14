import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";

const Products = ({ setUpdateCart, updateCart }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.json);
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProducts = () => {
    const { addItem } = useCart();

    return (
      <>
        {filter.map((products) => {
          const addToCart = () => {
            addItem(
              products.id,
              products.title,
              products.image,
              products.price
            );
          };
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center" key={products.id}>
                  <img
                    className="card-img-top"
                    src={products.image}
                    alt={products.title}
                    height="250px"
                    width="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {products.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead fw-bold">${products.price}</p>
                    <button
                      onClick={() => addToCart(products.id)}
                      className="btn btn-outline-dark"
                    >
                      <BsCartPlus size="1.8rem" />
                      Add to cart
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
