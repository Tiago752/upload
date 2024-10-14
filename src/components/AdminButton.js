// src/components/AdminButton.js
import React, { useState } from 'react';

const AdminButton = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (password === 'deinPasswort') {
      onLogin();
      setShowLogin(false);
      setPassword(''); // Passwortfeld leeren
    } else {
      alert('Falsches Passwort');
    }
  };

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={() => setShowLogin(!showLogin)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Admin
      </button>
      {showLogin && (
        <div className="bg-white p-4 shadow-md rounded mt-2">
          <div className="flex items-center border p-2">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-grow outline-none text-black"
              placeholder="Passwort"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 text-gray-500"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <button
            onClick={handleLogin}
            className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-full"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminButton;