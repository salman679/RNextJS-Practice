import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import { auth } from "../firebase";

export default function PrivateRoutes() {
  const { user, loading } = useAuthState(auth);

  if (loading) return <p>Loading user Data...</p>;
  return <>{user ? <Outlet /> : <NavLink to={"/login"} />}</>;
}
