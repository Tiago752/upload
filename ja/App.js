import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import LinkList from './components/LinkList';
import AdminPage from './components/AdminPage';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={
          <>
            <Header />
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div style={{ padding: '1em' }}>
              <LinkList searchQuery={searchQuery} />
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;