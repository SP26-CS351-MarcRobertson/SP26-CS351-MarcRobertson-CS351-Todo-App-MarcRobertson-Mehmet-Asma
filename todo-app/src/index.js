import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Oh here I’m importing React, ReactDOM to connect React to the browser,
//my main App component, and this web vitals thing which is optional.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//“This is where the App component actually gets rendered on the screen. 
// StrictMode just helps catch bugs while developing.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//This last part is about measuring performance, which is optional.
