import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import client from "./data/ApolloClient";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
