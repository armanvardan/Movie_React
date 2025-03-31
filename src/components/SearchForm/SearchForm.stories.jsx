import React from "react";
import SearchForm from "./SearchForm";
import '../../app.css';

export default {
  title: "Components/SearchForm",
  component: SearchForm,
  argTypes: {
    defaultValue: { control: "text" },
    onSearch: { action: "clicked-genre" },
  },
};

const Template = (args) => <SearchForm {...args} />;

export const FormSearch = Template.bind({});
FormSearch.args = {
  defaultValue: "Default placeholder",
  onSearch: () => {
    console.log('search clicked.');
  },
};
