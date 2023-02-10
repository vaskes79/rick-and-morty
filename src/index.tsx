import ReactDOM from "react-dom";
import { App, AppStateProvider } from "./components/App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
