import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1 className="p-4">Welcome to E-Commerce 🚀</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
