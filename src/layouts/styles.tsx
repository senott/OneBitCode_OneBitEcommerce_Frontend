import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #10163A;
    --color-secondary: #212744;
    --color-background: #262C49;
    --color-gray-light: #7DA1BC;
    --color-blue-light: #00CFFF;
    --color-white: #FFFFFF;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    background: var(--color-background);
    color: var(--color-white);
    overflow-x: hidden;
  }

  body, .sticky-footer-wrapper {
    min-height: 100vh;
  }
`;
