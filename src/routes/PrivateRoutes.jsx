import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

export default function PrivateRoutes() {
  const [user, loading] = useAuthState(auth);

  console.log(user);

  console.log(loading);

  if (loading) return <p>Loading user Data...</p>;
  return <>{user?.uid ? <Outlet /> : <Navigate to={"/login"} />}</>;
}
