import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

//pages for the signup

export default function Signup() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [displayName, setDisplayName] = useState('')
const {signup, isPending, error} = useSignup();


  return (
    <div>HELLO</div>
  )
}
