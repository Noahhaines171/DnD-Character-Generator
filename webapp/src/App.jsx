import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "App.css";
import logo from "logo.svg";
import NavBar from "components/NavBar";
import SpellCards from "pages/SpellCards";

const queryClient = new QueryClient();

const routes = [
  {
    path: "/spell-cards",
    element: <SpellCards />,
  },
];
const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
            <NavBar></NavBar>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Outlet></Outlet>
        </div>
        <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider>
    </RouterProvider>
  );
}

export default App;
