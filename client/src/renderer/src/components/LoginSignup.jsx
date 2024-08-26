/* eslint-disable react/prop-types */

import { useState } from "react";
// import '../assets/index.css';
//   login-signup

const LoginSignup = ({ setShowLoginSignup }) => {
  const [currentState, setCurrentState] = useState("Login");

  // loginform

  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform login logic here
      console.log("Login:", { email, password });
    };

    return (
      <>
        <form className="loginform" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <button type="submit">Login</button>
        </form>
        <p>Dont have an account:</p>
        <button onClick={() => setCurrentState("Signup")}>Sign Up</button>
      </>
    );
  };

  //   signup

  const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      // Perform signup logic here
      console.log("Signup:", { email, password });
    };

    return (
      <>
        <form className="signupform" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account:</p>
        <button onClick={() => setCurrentState("Login")}>Login</button>
      </>
    );
  };

  return (
    <div className="login_signup">
        <div className="login_signup_head">
            <p>{currentState}</p>
            <button onClick={() => setShowLoginSignup(false)}>x</button>
        </div>
        <div className="login_signup_form">{currentState === "Login" ? 
            <LoginForm /> : <SignupForm />}
        </div>
    </div>
  );
};

export default LoginSignup;
