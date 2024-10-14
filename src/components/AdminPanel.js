// src/components/AdminPanel.js
import React, { useState } from 'react';

const AdminPanel = ({ links, setLinks }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newLink, setNewLink] = useState({ name: '', url: '', logo: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLink({ ...newLink, [name]: value });
  };

  const handleAddLink = () => {
    setLinks([...links, newLink]);
    setNewLink({ name: '', url: '', logo: '', description: '' });
  };

  const handleEditLink = (index) => {
    setEditingIndex(index);
    setNewLink(links[index]);
  };

  const handleSaveEdit = () => {
    const updatedLinks = [...links];
    updatedLinks[editingIndex] = newLink;
    setLinks(updatedLinks);
    setEditingIndex(null);
    setNewLink({ name: '', url: '', logo: '', description: '' });
  };

  const handleDeleteLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-3/4 max-w-lg">
        <h2 className="text-2xl mb-4">Admin Panel</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{link.name}</span>
              <div>
                <button onClick={() => handleEditLink(index)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Bearbeiten</button>
                <button onClick={() => handleDeleteLink(index)} className="bg-red-500 text-white px-2 py-1 rounded">Löschen</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="text"
            name="name"
            value={newLink.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            name="url"
            value={newLink.url}
            onChange={handleInputChange}
            placeholder="URL"
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            name="logo"
            value={newLink.logo}
            onChange={handleInputChange}
            placeholder="Logo URL"
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            name="description"
            value={newLink.description}
            onChange={handleInputChange}
            placeholder="Beschreibung"
            className="border p-2 w-full mb-2"
          />
          {editingIndex !== null ? (
            <button onClick={handleSaveEdit} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Speichern</button>
          ) : (
            <button onClick={handleAddLink} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Hinzufügen</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;