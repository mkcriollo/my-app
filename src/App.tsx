import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Gallery from "./Components/Gallery";
import Albums from "./Components/Albums";

// Cache (infinity)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header>
          <h2>Brainscape App Coding Exercise</h2>
          <p>Photo Album Generator by Mike C.</p>
        </header>
        <section>
          <Gallery />
          <Albums />
        </section>
      </div>
    </QueryClientProvider>
  );
}

export default App;
