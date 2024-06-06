import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f1f1f1;

  a {
    text-decoration: none;
    color: #007bff;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`;
