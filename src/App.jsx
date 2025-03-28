import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Counter from './Counter';
import SearchForm from './SearchForm';
import GenreSelect from './GenreSelect';
import './App.css'

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
      <Counter defaultValue={10}></Counter>
      <SearchForm defaultValue='arman' onSearch={search}></SearchForm>
      
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onClick={handleGenreClick}
      />
    </div>
  );
}

export default App
