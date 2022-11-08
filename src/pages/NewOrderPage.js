import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
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
    return (
      <>
        <div>
          <button>All</button>
          <button>Men's</button>
          <button>Women's</button>
          <button>Jewelry</button>
          <button>Electronics</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div>
                <img
                  class="card-img-top"
                  src={product.image}
                  alt={product.title}
                />
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">${product.price}</p>
                  <a href="#" class="btn btn-primary">
                    Add to cart
                  </a>
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
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
