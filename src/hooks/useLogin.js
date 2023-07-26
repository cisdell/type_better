import {useState} from 'react'
import {useAuthContext} from './useAuthContext';

//firebase imports
import {auth} from '../firebase/config'
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null)
  const {dispatch} = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    signInWithEmailAndPassword(auth, email, password)
    .then((res)=> {
      console.log("user logged in:", res.user);
      dispatch({type: "LOGIN", payload: res.user})
    })
    .catch((err) => {
      setError(err.message);
    });
  }
  return {error, login}
}

// export const useGuest = () => {
//   const [id, pw] = ['guest@gmail.com','guest1234'];
//   console.log(id, pw)
//   const guest = useLogin()
//   guest.login(id, pw)
//   console.log(guest)
//   return guest
// }