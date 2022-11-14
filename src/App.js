import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/HomePage";
import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(getUser());
  const [updateCart, setUpdateCart] = useState(0);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar
            user={user}
            setUser={setUser}
            updateCart={updateCart}
            setUpdateCart={setUpdateCart}
          />
          <Routes>
            <Route
              path="/products/all"
              element={
                <Products
                  updateCart={updateCart}
                  setUpdateCart={setUpdateCart}
                />
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </>
      ) : (
        <AuthPage user={user} setUser={setUser} />
      )}
    </main>
  );
}

export default App;
