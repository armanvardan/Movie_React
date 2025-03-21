import React from 'react';

function GenreSelect({ genres, selectedGenre, onClick }) {
    return (
      <div className="genre-selector">
        { genres.map((genre) => (
          <div
            key={genre}
            className={`genre-button ${genre === selectedGenre ? 'selected' : ''}`}
            onClick={() => onClick(genre)}
          >
            {genre}
          </div>
        ))}
      </div>
    );

}

export default GenreSelect;