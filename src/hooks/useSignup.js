//react imports
import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

//firebase imports
import { auth } from "../firebase/config"; // auth module for signing up
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setError(null);
    setIsPending(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      dispatch({type: "LOGIN", payload: res.user})
    })
    .catch((err) => {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    })

    // try {
    //   const res = await auth.createUserWithEmailAndPassword(email, password);
    //   if (!res) {
    //     throw new Error("Signup abrted Could not complete it!");
    //   }
    //   dispatch({ type: "LOGIN", payload: res.user });
    // } catch (err) {
    //   if (!isCancelled) {
    //     setError(err.message);
    //     setIsPending(false);
    //   }
    // }
  };

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { error, isPending, signup };
};
