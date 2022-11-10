import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";
import { useState } from "react";

const NavBar = ({ user, setUser, updateCart }) => {
  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
  };

  return (
    <nav className="btn-group btn-group-lg" role="group">
      <Link to="/home" className="btn btn-secondary">
        Home{" "}
      </Link>
      {/* &nbsp; | &nbsp; */}
      <Link to="/products/all" className="btn btn-secondary">
        Products
      </Link>{" "}
      {/* &nbsp; | &nbsp; <span>Welcome, {user.name.toUpperCase()}</span> */}
      {/* &nbsp; | &nbsp; */}
      <Link to="/cart" className="btn btn-secondary">
        Cart{" "}
        <span className="badge badge-light">
          ({updateCart ? updateCart : 0})
        </span>
      </Link>
      {/* &nbsp; | &nbsp; */}
      <Link to="" onClick={handleLogOut} className="btn btn-secondary">
        Log Out
      </Link>
    </nav>
  );
};

export default NavBar;
