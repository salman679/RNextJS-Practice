import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await loginWithEmailAndPassword(email, password);
    console.log(response);
    navigate("/home");
  }

  return (
    <div className="flex flex-col p-4 items-center justify-center">
      <h1 className="text-4xl my-2">Login</h1>
      <form className="flex flex-col">
        <div className="my-1">
          <label htmlFor="email">Email Address:</label>

          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
            className="m-2 my-1 focus:outline-none p-1 border border-gray-400 rounded-sm"
          />
        </div>
        <div className="my-1">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password Address"
            className="m-2 p-1 my-1 focus:outline-none border border-gray-400 rounded-sm"
          />
        </div>
        <button
          className="bg-black text-white p-1 rounded-sm m-auto"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      <p className="my-2">
        No Account?{" "}
        <NavLink to="/register" className="underline">
          Sign Up
        </NavLink>
      </p>
      <p className="my-2">
        Forget Your Password?{" "}
        <NavLink to="/reset" className="underline">
          Reset Password
        </NavLink>
      </p>
    </div>
  );
}
