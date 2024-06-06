import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.p`
  margin-right: 20px;
  font-size: 1rem;
  color: #333;
`;

export const LogoutButton = styled.button`
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;
