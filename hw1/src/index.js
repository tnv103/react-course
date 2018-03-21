import './main.scss';
import "babel-polyfill";
import "whatwg-fetch";
import React from 'react';
import ReactDOM from 'react-dom';
import data from './assets/data.json';
import BookCards from './js/components/BookCards';

const titles = ["The adventures of Tom Sawyer", "Tom Sawyer abroad"];

ReactDOM.render(
  <BookCards titles={titles} />
  ,document.getElementById("root")
);
