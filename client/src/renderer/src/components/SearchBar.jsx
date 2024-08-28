import React, { useState } from 'react'

const SearchBar = ({totalItems,setItems}) =>{

const [searchTerm, setSearchTerm] = useState('');
// const [results, setResults] = useState([]);

// const items = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Mango",
//   "Grapes",
//   "Pineapple",
// ];

const handleSearch = () => {
  if (searchTerm === '') {
    setItems(totalItems);
  } else {
    const filteredItems = totalItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  }
};

return (
  <div style={{ padding: "20px" }}>
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(event)=>setSearchTerm(event.target.value)}
      style={{ padding: "10px", width: "300px", fontSize: "16px" }}
    />
    <button className="search" onClick={handleSearch}>
        search
    </button>
    {/* <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
      {results.map((result, index) => (
        <li key={index} style={{ padding: "5px 0" }}>
          {result}
        </li>
      ))}
    </ul> */}
  </div>
);
}

export default SearchBar