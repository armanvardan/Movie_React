import React from "react";
import Counter from "./Counter";
import '../../index.css';

export default {
  title: "Components/Counter",
  component: Counter,
};

export const Default = () => <Counter defaultValue={10} />;