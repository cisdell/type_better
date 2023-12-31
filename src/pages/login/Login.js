import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();
  // console.log(email)

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(email, password)
    login(email, password);
  };

  return (
    <div className="user-form" id="mid-body">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn">sign up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
