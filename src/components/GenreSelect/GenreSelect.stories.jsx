import React from "react";
import GenreSelect from "./GenreSelect";
import '../../app.css';

export default {
  title: "Components/GenreSelect",
  component: GenreSelect,
  argTypes: {
    genres: { control: "array" },
    selectedGenre: { control: "text" },
    onClick: { action: "clicked-genre" },
  },
};

const Template = (args) => <GenreSelect {...args} />;

export const SelectedGenre = Template.bind({});
SelectedGenre.args = {
  genres: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"],
  selectedGenre: "Comedy",
  onClick: (genre) => {
    console.log(`${genre} clicked.`);
  },
};
