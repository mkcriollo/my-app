import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Grid } from "@chakra-ui/react";
import HomePage from "./HomePage";

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
      <Grid templateRows="1fr 2fr" height="100vh" p="20px">
        <header className="header">
          <h2>Brainscape App Coding Exercise</h2>
          <p>Photo Album Generator by Mike C.</p>
        </header>
        <HomePage />
      </Grid>
    </QueryClientProvider>
  );
};

export default App;
