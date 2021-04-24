import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Matching the elements by ID.
ReactDOM.render(<App />, document.getElementById('root'));

//Service worker is online.
serviceWorker.register();