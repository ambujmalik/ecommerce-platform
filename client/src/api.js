// api.js
// Use environment variable if available, otherwise detect Codespaces URL or fallback to localhost
let API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  // If running inside GitHub Codespaces
  if (window.location.hostname.includes("github.dev")) {
    API_URL = window.location.origin.replace(
      "3000", // client default port (vite)
      "4000"  // server port
    ) + "/api";
  } else {
    // fallback for local dev
    API_URL = "http://localhost:4000/api";
  }
}

console.log("🔗 Using API_URL:", API_URL);

export async function register(email, password) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}
