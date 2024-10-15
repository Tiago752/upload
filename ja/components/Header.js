import React, { useState } from 'react';
import AdminLoginPopup from './AdminLoginPopup';
import './Header.css';

const Header = ({ isAdmin }) => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleAdminClick = () => {
    setShowAdminLogin(true);
  };

  const closePopup = () => {
    setShowAdminLogin(false);
  };

  return (
    <header className="header">
      <h1>{isAdmin ? 'LinkLuchs Admin' : 'LinkLuchs'}</h1>
      {isAdmin ? (
        <button className="admin-button" onClick={() => window.location.href = '/'}>Verlassen</button>
      ) : (
        <button onClick={handleAdminClick} className="admin-button">Admin</button>
      )}
      {showAdminLogin && <AdminLoginPopup closePopup={closePopup} />}
    </header>
  );
};

export default Header;