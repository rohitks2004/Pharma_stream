import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useSelector((state) => state.userSlice.user);

    const loginreq =async ()=>{
      try{
        console.log(email)
        const res = await axios.post(
          "http://localhost:8800/api/superlogin/login",
          {
            email,password
          },{withCredentials:true}
        );
        dispatch(login(res.data))
        }catch(e){
          console.log(e);
        }

    }
    const handleSubmit = (e) => {
      e.preventDefault();
      loginreq();
      // dispatch(login({
      //   "userType": "superAdmin",
      //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvaGl0QG1haWwuY29tIiwidXNlclR5cGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzI0NzY5ODE3LCJleHAiOjE3MjQ4NTYyMTd9.h2i_As8cxQliG8jxF613-oxkEJsjdF0fmuHtgoHLIt4"
      // }));
      navigate("/");
    };

    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [user, navigate]);



  return (
    <div className="login_signup">
      <div className="login_signup_head">
        <p>Login</p>
      </div>
      <div className="login_signup_form">
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
      </div>
    </div>
  );
};

export default Login;