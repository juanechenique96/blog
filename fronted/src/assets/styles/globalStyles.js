import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', Helvetica, sans-serif;
    font-size: 16px;
    margin: 0px 20px;
}
li {
    list-style-type: none;
}
`;

export default GlobalStyle;
