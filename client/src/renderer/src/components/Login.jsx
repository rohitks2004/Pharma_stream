import { useState } from "react";

const Login = () => {

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
      </>
    );
  };

  return (
    <div className="login_signup">
        <div className="login_signup_head">
            <p>Login</p>
        </div>
        <div className="login_signup_form">
            <LoginForm />
        </div>
    </div>
  );
};

export default Login;
