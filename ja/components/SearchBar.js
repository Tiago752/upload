import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Seiten suchen..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchInput}
      />
    </div>
  );
};

const styles = {
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1em',
  },
  searchInput: {
    width: '50%',
    padding: '0.5em',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1em',
  },
};

export default SearchBar;