import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sendPasswordReset } from "../firebase";

export default function Reset() {
  const [email, setEmail] = useState("");

  function handleReset() {
    sendPasswordReset(email);
  }
  return (
    <div className="flex flex-col p-4 items-center justify-center">
      <h1 className="text-4xl my-2">Reset Password</h1>
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

        <button
          className="bg-black text-white p-1 rounded-sm m-auto"
          type="submit"
          onClick={handleReset}
        >
          Reset Password
        </button>
      </form>
      <p className="my-2">
        No Account?{" "}
        <NavLink to="/register" className="underline">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
}
