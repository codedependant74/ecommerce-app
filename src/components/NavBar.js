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
      <Link to="/products">Products</Link> <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
};

export default NavBar;
