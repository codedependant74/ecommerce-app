import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";

const NavBar = ({ user, setUser }) => {
  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
  };

  return (
    <nav>
      <Link to="/home">Home </Link>
      &nbsp; | &nbsp;
      <Link to="/products/all">Products</Link> &nbsp; | &nbsp;{" "}
      <span>Welcome, {user.name.toUpperCase()}</span>
      &nbsp; | &nbsp;
      <Link to="/cart">Cart</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
};

export default NavBar;
