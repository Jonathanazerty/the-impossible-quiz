import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Home} from './home';
import { Question1 } from './question1';
import { Question2 } from './question2';
import { Question3 } from './question3';
import { Question4 } from './question4';
import { Question5 } from './question5';
import { Question6 } from './question6';
import { Question7 } from './question7';
import { Question8 } from './question8';
import { Question9 } from './question9';
import { Question10 } from './question10';

export {
    Home,
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    Question6,
    Question7,
    Question8,
    Question9,
    Question10
};

ReactDOM.render(
  <React.StrictMode>
    <><App /></>
  </React.StrictMode>,
  document.getElementById('root')
);
