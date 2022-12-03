import axios from "axios";
import { useState } from "react";

const Login = () => {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="username" value="username" />
        <input type="password" placeholder="password" value="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
