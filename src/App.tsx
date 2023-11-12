import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Gallery from "./Components/Gallery";
import Albums from "./Components/Albums";
import { SimpleGrid, Grid, GridItem } from "@chakra-ui/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid templateRows="200px 2fr">
        <header className="header">
          <h2>Brainscape App Coding Exercise</h2>
          <p>Photo Album Generator by Mike C.</p>
        </header>
        <Grid templateColumns="3fr 1fr">
          <Gallery />
          <Albums />
        </Grid>
      </Grid>
    </QueryClientProvider>
  );
};

export default App;
