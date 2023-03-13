import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);   // we are creating store and assign reducer with state variable 
                                      // no state variable consider as global variable. 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>       
         <App />
    </Provider>
  </React.StrictMode>
);
  // to enable store features in all component to access global state.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
