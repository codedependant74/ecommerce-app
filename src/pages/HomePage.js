import { showProducts } from "./Products";

const Home = () => {
  return (
    <div>
      <div className="my-4 py-3">
        <h1 className="display-3 fw-bolder">Nel's Closet</h1>
        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Browsing through clothing rack"
          width="800"
          height="500"
        />
      </div>
      <div>
        <h2>Featured Products</h2>
      </div>
      <showProducts />
    </div>
  );
};

export default Home;
