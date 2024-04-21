import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Crucial } from "./pages/crucial";
import { Depends } from "./pages/depends";
import { Irrelevant } from "./pages/irrelevant";
import { Nav } from "./pages/Navigation";
import { Sign } from "./pages/signup";
import { Login } from "./pages/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignPage />} />
        <Route path="/login" element={<LogPage />} />
        <Route path="/" element={<Nav />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/crucial" element={<Crucial />} />
          <Route path="/depends" element={<Depends />} />
          <Route path="/irrelevant" element={<Irrelevant />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const SignPage = () => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    navigate("/Home");
  };

  return <Sign onSubmit={handleSubmit} />;
};

const LogPage = () => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    navigate("/Home");
  };

  return <Login onSubmit={handleSubmit} />;
};

export default App;
