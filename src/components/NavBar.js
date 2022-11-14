import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";
import { useCart } from "react-use-cart";
import { BiCart } from "react-icons/bi";

const NavBar = ({ user, setUser }) => {
  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
  };

  const { isEmpty, totalItems } = useCart();

  return (
    <nav className="btn-group btn-group-lg" role="group">
      <Link to="/home" className="btn btn-secondary">
        Home
      </Link>

      <Link to="/products/all" className="btn btn-secondary">
        Products
      </Link>

      <Link to="/cart" className="btn btn-secondary">
        <BiCart size="2rem" />
        {!isEmpty && (
          <span style={{ position: "relative", left: "-21px", top: "-18px" }}>
            {totalItems}
          </span>
        )}
        <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}>&nbsp;Cart</span>
      </Link>

      <Link to="" onClick={handleLogOut} className="btn btn-secondary">
        Log Out
      </Link>
    </nav>
  );
};

export default NavBar;
