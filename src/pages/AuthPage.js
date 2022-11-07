import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

const AuthPage = ({ setUser }) => {
  const [showSignUp, setShowSign] = useState(true);
  return (
    <div>
      <h1>AuthPage</h1>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
      <button onClick={() => setShowSign(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </button>
    </div>
  );
};

export default AuthPage;
