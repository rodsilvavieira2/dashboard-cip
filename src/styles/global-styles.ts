import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
  }

  body {
    font-family: 'Lato', sans-serif;
    color: ${(props) => props.theme.text.primary};
    background-color: ${props => props.theme.background};
  }

  ul {
    list-style: none;
  }
`;
