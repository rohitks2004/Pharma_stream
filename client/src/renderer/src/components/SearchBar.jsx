import React, { useState } from 'react';

const SearchBar = ({ setItems }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setItems(searchTerm); // Call setItems with the search term
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />
      <button className="search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
