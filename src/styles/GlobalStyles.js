import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif; // Nowoczesna czcionka
    margin: 0;
    padding: 0;
    background-color: #f5f5f5; // Jasne tło
  }

  h1, h2, h3 {
    font-weight: 400; // Lżejsze nagłówki
  }

  a {
    color: #007bff; // Kolor linków
    text-decoration: none;
  }

  button {
    background-color: #007bff; // Kolor przycisków
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px; // Zaokrąglone rogi
  }
`;

export default GlobalStyles;
