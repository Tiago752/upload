import React, { useState } from 'react';
import './AdminLoginPopup.css';

const AdminLoginPopup = ({ closePopup }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === '123') {
      window.location.href = '/admin';
    } else {
      setError('Falsches Passwort');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={closePopup}>Schließen</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default AdminLoginPopup;