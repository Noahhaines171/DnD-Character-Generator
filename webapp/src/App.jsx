import React from "react";
// import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import NavBar from "components/NavBar";
import SpellCards from "pages/SpellCards";
import Landing from "pages/Landing";

// const queryClient = new QueryClient();

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/spell-cards",
    element: <SpellCards />,
  },
];
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        {/* <QueryClientProvider client={queryClient}> */}
        {/* <NavBar> */}
        <Outlet></Outlet>
        {/* </NavBar> */}
        {/* <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider> */}
      </RouterProvider>
    </>
  );
}

export default App;
