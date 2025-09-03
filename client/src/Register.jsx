import { useState } from "react";
import { register } from "./api";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(email, password);
    if (res.error) setMsg(res.error);
    else setMsg("✅ Registered! Now login.");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Register
        </button>
      </form>

      <p className="mt-2">{msg}</p>

      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
}
