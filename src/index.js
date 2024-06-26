// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import GlobalStyles from './styles/GlobalStyles';
import { store } from './redux/store';
import './redux/axiosConfig';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>
);
