import { useState } from 'react'
import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';
import MovieTile from './components/MovieTile/MovieTile';
import './App.css'

function App() {
  
  const [selectedGenre, setSelectedGenre] = useState('All');

  const search = (value) => {
    console.log('arman = ', value);
  }
  
  const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
  const movies = [
    {
      imageUrl: 'https://via.placeholder.com/300x400',
      name: 'Inception',
      releaseYear: 2024,
      genres: ['DOCUMENTARY', 'COMEDY', 'HORROR'],
    },
    {
      imageUrl: 'https://via.placeholder.com/300x400',
      name: 'Titanic',
      releaseYear: 2023,
      genres: ['COMEDY', 'HORROR', 'CRIME'],
    },
    {
      imageUrl: 'https://via.placeholder.com/300x400',
      name: 'The Dark Knight',
      releaseYear: 2025,
      genres: ['HORROR', 'CRIME'],
    }
  ];

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const handleMovieClick = (movie) => {
    console.log(`Arman clicked ${movie.name}`);
  };

  return (
    <div>
      <div className="App">
        <Counter defaultValue={10}></Counter>
        <SearchForm defaultValue='arman' onSearch={search}></SearchForm>
        
        <GenreSelect
          genres={genres}
          selectedGenre={selectedGenre}
          onClick={handleGenreClick}
        />
      </div>
      <div className='movies'>
      {movies.map((movie, index) => (
        <MovieTile
          key={index}
          movie={movie}
          onClick={handleMovieClick}
        />
      ))}
    </div>
    </div>
  );
}

export default App
