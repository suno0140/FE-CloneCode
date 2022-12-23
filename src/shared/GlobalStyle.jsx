import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');

body{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'NanumSquare';
}

button {
  cursor: pointer;
  outline: none;
}

input {
  outline: none;
  padding-left: 1rem;
}

`;

export default GlobalStyle;
