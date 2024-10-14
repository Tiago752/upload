// src/App.js
import React, { useState } from 'react';
import LinkList from './components/LinkList';
import AdminButton from './components/AdminButton';
import AdminPanel from './components/AdminPanel';
import './index.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [links, setLinks] = useState([
    { name: 'Example', url: 'https://example.com', logo: 'https://via.placeholder.com/64', description: 'Eine kurze Beschreibung der Website.' },
    // Weitere Links
  ]);

  return (
    <div className="bg-gray-100 min-h-screen relative">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl">LinkLuchs</h1>
        <AdminButton onLogin={() => setIsAdmin(true)} />
      </header>
      <LinkList links={links} />
      {isAdmin && (
        <AdminPanel
          links={links}
          setLinks={setLinks}
        />
      )}
    </div>
  );
}

export default App;