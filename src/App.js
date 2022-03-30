import "./App.scss";
import React from "react";
import { Router, Link } from "@reach/router";
import NotFound from "./pages/notFound";
import CreateAd from "./pages/createAd";
import StartPage from "./pages/startPage";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create-ad">Create Ad</Link>
      </nav>
      <Router>
        <CreateAd path="/create-ad" />
        <StartPage path="/" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
