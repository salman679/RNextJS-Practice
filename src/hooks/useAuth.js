import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(currentUser);

  console.log(isLoading);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      try {
        setIsLoading((pre) => !pre);
        if (user) {
          setCurrentUser(user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    });

    console.log("ok");

    // return () => {
    //   listen();
    // };
  }, []);

  return [currentUser, isLoading];
};
