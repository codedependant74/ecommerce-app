import React, { useState, useEffect } from "react";
import { setUpdateCart, updateCart } from "../components/NavBar";

const Products = ({ setUpdateCart, updateCart }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json);
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
    const handleClick = (item) => {
      // Update cart item quantity if already in cart
      if (cart.some((cartItem) => cartItem.id === item.id)) {
        setCart((cart) =>
          cart.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  amount: cartItem.amount + 1,
                }
              : cartItem
          )
        );
        return;
      }
      // Add to cart
      setCart((cart) => [
        ...cart,
        { ...item, amount: 0 }, // <-- initial amount 1
      ]);
    };
    const handleChange = (id, d) => {
      setCart((cart) =>
        cart.flatMap((cartItem) =>
          cartItem.id === id
            ? cartItem.amount + d < 1
              ? [] // <-- remove item if amount will be less than 1
              : [
                  {
                    ...cartItem,
                    amount: cartItem.amount + d,
                  },
                ]
            : [cartItem]
        )
      );
    };
    return (
      <>
        <div>
          <button>All</button>
          <button>Men's</button>
          <button>Women's</button>
          <button>Jewelry</button>
          <button>Electronics</button>
        </div>
        {filter.map((products) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card h-100 text-center" key={Products.id}>
                  <img
                    className="card-img-top"
                    src={products.image}
                    alt={products.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className="card-text">${products.price}</p>
                    <a
                      href="#"
                      // onClick={() => handleClick(handleClick(item))}
                      className="btn btn-primary"
                    >
                      Add to cart
                    </a>
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
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Products</h1>
        </div>
      </div>
      <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
