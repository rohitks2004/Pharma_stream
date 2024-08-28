import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";

const Login = () => {

  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useSelector((state) => state.userSlice.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login({
        "userType": "superAdmin",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvaGl0QG1haWwuY29tIiwidXNlclR5cGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzI0NzY5ODE3LCJleHAiOjE3MjQ4NTYyMTd9.h2i_As8cxQliG8jxF613-oxkEJsjdF0fmuHtgoHLIt4"
      }));
      navigate("/sideBar");
    };

    useEffect(() => {
      if (user) {
        navigate("/sideBar");
      }
    }, [user, navigate]);

    return (
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
