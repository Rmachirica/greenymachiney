import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;

const Toggle = ({theme,  toggleTheme }) => {
    return (
      <Button onClick={toggleTheme}>
        Dark Mode
      </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
