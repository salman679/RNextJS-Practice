import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  registerWithEmailAndPassword,
  signInWithFacebook,
  signInWithGoogle,
} from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const user = await registerWithEmailAndPassword(email, password);
      console.log(user);
      // navigate("/login");
    } catch (err) {
      console.error(err);
    }
  }

  async function handleGoogleLogin() {
    const user = await signInWithGoogle();
    console.log(user);
    navigate("/home");
  }

  async function handleFacebookLogin() {
    try {
      const user = await signInWithFacebook();
      console.log(user);
    } catch (err) {
      console.log(err);
    }
    navigate("/home");
  }

  return (
    <div className="flex flex-col p-4 items-center justify-center">
      <h1 className="text-4xl my-2">Register</h1>
      <form className="flex flex-col" action="" onSubmit={handleSubmit}>
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
          className="bg-black text-white p-1 rounded m-auto mb-2 "
          type="submit"
        >
          Register
        </button>
      </form>
      <button
        className="bg-cyan-600 text-white p-1 rounded m-auto"
        type="submit"
        onClick={handleGoogleLogin}
      >
        Sign With Google
      </button>
      <button
        className="bg-cyan-600 text-white p-1 rounded m-auto"
        type="submit"
        onClick={handleFacebookLogin}
      >
        Sign With facebook
      </button>
      <p className="my-2">
        Already Have an Account?{" "}
        <NavLink to="/login" className="underline">
          Sign In
        </NavLink>
      </p>
    </div>
  );
}
