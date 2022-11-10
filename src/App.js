import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/products/all" element={<Products />} />
            <Route path="/home" element={<OrderHistoryPage />} />
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
