import getProducts from "./GetProduct";
import { BsCartPlus } from "react-icons/bs";
import { useCart } from "react-use-cart";

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
                      setUpdateCart([...updateCart, product[id]]);
                      console.log(setUpdateCart, "we're here");
                    }}
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

export default ShowProducts;
