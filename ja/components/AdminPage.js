import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import LinkList from './LinkList';

const AdminPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Header isAdmin={true} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="Admin-Suche..." />
      <div style={{ padding: '1em' }}>
        <LinkList searchQuery={searchQuery} isAdmin={true} />
      </div>
    </div>
  );
};

export default AdminPage;