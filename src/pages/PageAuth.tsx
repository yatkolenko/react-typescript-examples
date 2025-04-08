import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Login page component to simulate authentication
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // TODO Simulated login function (replace with API call in future)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      // Save login status in localStorage for simulation
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <form onSubmit={handleLogin} className="w-full max-w-md rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-center text-2xl font-semibold">Login</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="mb-1 block">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full rounded border p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
