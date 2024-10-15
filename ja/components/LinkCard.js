import React, { useState } from 'react';
import './LinkCard.css';

const LinkCard = ({ url, name, description, isAdmin }) => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="link-card-container" onMouseEnter={() => setShowButtons(true)} onMouseLeave={() => setShowButtons(false)}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
        <div className="link-card-content">
          <img src={`https://logo.clearbit.com/${new URL(url).hostname}`} alt={`${name} icon`} className="link-card-icon" />
          <div className="link-card-text">
            <h2 className="link-card-title">{name}</h2>
          </div>
          {isAdmin && showButtons && (
            <div className="admin-buttons">
              <button className="edit-button" onClick={() => alert('Bearbeiten')}>Bearbeiten</button>
              <button className="delete-button" onClick={() => alert('Löschen')}>Löschen</button>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default LinkCard;