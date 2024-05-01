import React from 'react';
import './SearchableDropdown.css'; // Import your CSS file for styling

const SearchableDropdown = ({ items, onSelect, searchQuery, setSearchQuery }) => {
  // Ensure setSearchQuery is a function before calling it
  const handleChange = (e) => {
    if (setSearchQuery && typeof setSearchQuery === 'function') {
      setSearchQuery(e.target.value);
    }
  };

  // Filter items based on searchQuery
  const filteredItems = items.filter(item =>
    item.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="searchable-dropdown">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search Skills..."
        aria-label="Search Skills"
        className="search-input"
      />
      {/* Display dropdown only if searchQuery is not empty */}
      {searchQuery.trim() !== '' && (
        <div className="dropdown-content">
          <ul className="options-list">
            {filteredItems.map((item, index) => (
              <li key={index} onClick={() => onSelect(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
