import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, Text } from "@chakra-ui/react";
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
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Grid templateRows="1fr 2fr" height="100vh" p="20px">
          <header>
            <Text fontSize="3xl" fontWeight="bolder">
              Brainscape App Coding Exercise
            </Text>
            <Text>Photo Album Generator by Mike C.</Text>
          </header>
          <HomePage />
        </Grid>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
