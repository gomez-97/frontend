import { FetchProvider } from "@context/fetch";
import { MainSearch } from "@screens/main-search";
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const App = (): React.ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchProvider>
        <Router>
          <Switch>
            <Route path="/" component={MainSearch as React.ComponentType} />
          </Switch>
        </Router>
      </FetchProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
