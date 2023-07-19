import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [displayName, setDisplayName] = useState('')
const {signup, isPending, error} = useSignup();
// console.log(email)

const handleSubmit = (e) => {
  e.preventDefault();
  //console.log(email, password)
  signup(email, password)


}

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>set email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>set password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>sign up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
