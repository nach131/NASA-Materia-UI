import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Api from './components/test/ApiDos'
import ApiNasa from './components/test/ApiNasa'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Api />
    <ApiNasa />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
