import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

//pages for the signup

export default function Signup() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [displayName, setDisplayName] = useState('')
const {signup, isPending, error} = useSignup();


  return (
    <div>
      <h2>SignUp</h2>
      <form>
        <label>
          <span>email:</span>
          <input
            type="email"
          />
        </label>

        <label>
          <span>password:</span>
          <input
            type="password"
          />
        </label>
        <button>sign up</button>
      </form>
    </div>
  )
}
