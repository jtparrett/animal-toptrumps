import React from "react";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
import { ApolloProvider } from "@apollo/client";

import { client } from "./ApolloClient";
import { Catalogue } from "./pages";

export const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <ApolloProvider client={client}>
      <Catalogue />
    </ApolloProvider>
  </ThemeProvider>
);
