import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,700;1,900&display=swap');
*,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    transition: all 0.25s linear;
  }
`;
