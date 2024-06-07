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
    padding: 10px;
    border-radius: 5px;

    &:hover {
      color: #0056b3;
      background-color: #e1e1e1;
    }

    &.active {
      color: #0056b3;
      background-color: #e1e1e1;
    }
  }

  div {
    display: flex;
    align-items: center;
  }
`;
