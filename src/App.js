import './App.css';
import React, { useState } from 'react';
import Counter from './Counter';
import SearchForm from './SearchForm';
import GenreSelect from './GenreSelect';

function App() {
  
  const [selectedGenre, setSelectedGenre] = useState('All');

  const search = (value) => {
    console.log('arman = ', value);
  }
  
  const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="App">
      <Counter defaultValue="10"></Counter>
      <SearchForm defaultValue='arman' onSearch={search}></SearchForm>
      
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onClick={handleGenreClick}
      />
    </div>
  );
}

export default App;
