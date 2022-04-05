import "./App.scss";
import React from "react";
import { Router, Link } from "@reach/router";
import NotFound from "./pages/notFound";
import StartPage from "./pages/startPage";
import Footer from "./components /footer";
import CreateAd01 from "./pages/createAd01";

import ProfilePage from "./pages/profilePage";
import Navbar from "./components /Navbar";
import CreateAd02 from "./pages/createAd02";
import CreateAd03 from "./pages/createAd03";
import CreateAd04 from "./pages/createAd04";
import CreateAd05 from "./pages/createAd05";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create-ad">Create Ad</Link>
        <Link to="/create-ad2">Create Ad2</Link>
        <Link to="/create-ad3">Create Ad3</Link>
        <Link to="/create-ad4">Create Ad4</Link>
        <Link to="/create-ad5">Create Ad5</Link>
        <Link to="/create-ad6">Create Ad6</Link>
        <Link to="/profile">My profile</Link>
      </nav>
      <Navbar />
      <Router>
        <CreateAd01 path="/create-ad" />
        <CreateAd02 path="/create-ad2" />
        <CreateAd03 path="/create-ad3" />
        <CreateAd04 path="/create-ad4" />
        <CreateAd05 path="/create-ad5" />

        <ProfilePage path="/profile" />
        <StartPage path="/" />
        <NotFound default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
