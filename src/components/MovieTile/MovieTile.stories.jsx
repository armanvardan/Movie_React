import React from 'react';
import MovieTile from './MovieTile';

export default {
  title: 'Components/MovieTile',
  component: MovieTile,
};

const Template = (args) => <MovieTile {...args} />;

const mockMovie = {
  imageUrl: 'https://via.placeholder.com/300x400',
  name: 'Inception',
  releaseYear: 2024,
  genres: ['DOCUMENTARY', 'COMEDY', 'HORROR'],
};

export const Default = Template.bind({});
Default.args = {
  movie: mockMovie,
  onClick: (movie) => alert(`You clicked on ${movie.name}`),
};
