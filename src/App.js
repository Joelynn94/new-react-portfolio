import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Navigation from "./components/Navigation/Navigation";
// Pages
import Home from "./pages/Home";
import "./index.scss";

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
