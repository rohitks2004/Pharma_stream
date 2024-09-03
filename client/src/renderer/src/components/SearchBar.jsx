import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
const SearchBar = ({ setItems }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setItems(searchTerm); // Call setItems with the search term
  };

  return (
    <div className='searchbar-div' style={{}}>
      <input
      className='search-input'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        style={{ padding: "10px", width: "350px", fontSize: "16px" }}
      />
      <button className="search-btn" onClick={handleSearch}>
      <IoSearch />
      </button>
    </div>
  );
}

export default SearchBar;
