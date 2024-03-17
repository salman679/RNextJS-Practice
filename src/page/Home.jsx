import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  if (loading) return <p>user info loading</p>;

  function handleLogout() {
    signOut(auth)
      .then(() => {
        console.log("signOut");
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <div>welcome, {user.email}</div>
      <button
        className="bg-black text-white rounded p-1"
        onClick={handleLogout}
      >
        logout
      </button>
    </>
  );
}
