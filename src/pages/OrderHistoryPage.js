import * as usersService from "../utilities/users-service";

const orderHistory = () => {
  const handleCheckToken = async () => {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
};

export default orderHistory;
