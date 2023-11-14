import React from "react";
// import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";

import NavBar from "components/NavBar";
import SpellCards from "pages/SpellCards";
import Landing from "pages/Landing";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// const queryClient = new QueryClient();

function PageLayout() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/spell-cards" element={<SpellCards />} />
      </Route>
    </Routes>
  );
}

// App level providers can wrap the below routers

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
