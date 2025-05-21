import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("authUser", JSON.stringify({ username }));
      onLogin();
    }
  };

  return (
    <div className="login p-6">
      <h2 className="text-xl font-bold mb-4">Login to Marcyrl Validation System</h2>
      <input placeholder="Username" className="border p-2 mb-2 w-full" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" className="border p-2 mb-2 w-full" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2">Login</button>
    </div>
  );
}