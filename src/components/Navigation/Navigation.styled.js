// src/components/Navigation/Navigation.styled.js
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f1f1f1;

  a {
    text-decoration: none;
    color: #007bff;
    font-size: 1.2rem;
    transition: color 0.3s, background-color 0.3s;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 0 5px;
    border: 1px solid transparent;

    &:hover {
      color: #ffffff;
      background-color: #007bff;
    }

    &.active {
      color: #ffffff;
      background-color: #007bff;
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  button {
    height: 40px;
    padding: 0 20px;
    border: none;
    border-radius: 5px;
    background-color: #dc3545;
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c82333;
    }
  }
`;
