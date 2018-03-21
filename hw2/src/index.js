import './main.scss';
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import SayHello from './js/components/SayHello';

const languages = [
  {
    "lang": "British",
    "code": "en-gb"
  },
  {
    "lang": "Bulgarian",
    "code": "bg"
  },
  {
    "lang": "French",
    "code": "fr"
  },
  {
    "lang": "Hungarian",
    "code": "hu"
  },
  {
    "lang": "Slovak",
    "code": "sk"
  },
  {
    "lang": "Slovenian",
    "code": "sl"
  },
  {
    "lang": "Turkish",
    "code": "tk"
  },
  {
    "lang": "Finish",
    "code": "fi"
  }
];

ReactDOM.render(
  <SayHello languages={languages} />
  ,document.getElementById("root")
);
