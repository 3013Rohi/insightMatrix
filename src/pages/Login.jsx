

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = {
    admin: { username: 'adminUser', password: 'adminPass' },
    user: { username: 'normalUser', password: 'userPass' },
  };

  const handleLogin = () => {
    setError('');
    const userCreds = users[role];

    if (username === userCreds.username && password === userCreds.password) {
      navigate(role === 'admin' ? '/admin' : '/dashboard');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-blue-500">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 border border-blue-300 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border border-blue-300 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          onChange={(e) => setRole(e.target.value)}
          value={role}
          className="p-3 border border-blue-300 rounded-lg mb-6 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg w-full transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
