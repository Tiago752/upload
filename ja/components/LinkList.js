import React, { useState, useEffect } from 'react';
import LinkCard from './LinkCard';
import './LinkList.css';

const LinkList = ({ searchQuery, isAdmin }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch('/links.json')
      .then(response => response.json())
      .then(data => setLinks(data))
      .catch(error => console.error('Error loading links:', error));
  }, []);

  const filteredLinks = links.filter(link =>
    link && link.name
  );

  const arrangedLinks = searchQuery ? filteredLinks : [...links];
  const rows = 4;
  const itemsPerRow = Math.ceil(arrangedLinks.length / rows);

  return (
    <div className="link-list">
      {isAdmin && (
        <div className="link-card-wrapper add-card" onClick={() => alert('Hinzufügen')}>
          <div className="add-card-content">
            <div className="add-card-icon">+</div>
            <div className="add-card-text">Hinzufügen</div>
          </div>
        </div>
      )}
      {[...Array(rows)].map((_, rowIndex) => (
        <div key={rowIndex} className="link-list-row">
          {arrangedLinks.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow).map((link, index) => (
            <div key={index} className="link-card-wrapper">
              <LinkCard {...link} isAdmin={isAdmin} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LinkList;