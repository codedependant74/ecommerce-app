import * as usersService from "../utilities/users-service";

const orderHistory = () => {
  const handleCheckToken = async () => {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <img
        src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Browsing through clothing rack"
        width="800"
        height="500"
      />
      {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
    </div>
  );
};

export default orderHistory;
