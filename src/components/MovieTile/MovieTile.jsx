import React, { useState }  from 'react';

function MovieTile(props) {
  const [movieData, setMovieData] = useState(props.movie);

  const handleClick = () => {
    props.onClick(movieData);
  };

  return (
    <div
      onClick={handleClick}
      className='movie_tile'
    >
      <img
        src={movieData.imageUrl}
        alt={movieData.name}
        className='movie_img'
      />
      <h3>{movieData.name}</h3>
      <p>
        {movieData.releaseYear}
      </p>
      <div>
        <span>
          {movieData.genres.join(', ')}
        </span>
      </div>
    </div>
  );
};

export default MovieTile;