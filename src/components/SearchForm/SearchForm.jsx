import React, { useState } from 'react';

function SearchForm({ defaultValue = '', onSearch }) {
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleChange = (event) => {
        setInputValue(event.target.value)
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(inputValue);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <input
                type="text"
                className='search-input'
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="What do you want to search?"
            />
            <button className='search-button' onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchForm;