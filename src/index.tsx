import ReactDOM from "react-dom";
import { App } from "./components/App";
import { Container, GlobalStyle } from "./indexStyles";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Container>
      <App />
    </Container>
  </>,
  document.getElementById("root")
);
