import GlobalStyle from "./shared/GlobalStyle";
import Router from "./shared/Router";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      어린왕자 MAGAZINE
    </ThemeProvider>
  );
}

export default App;
