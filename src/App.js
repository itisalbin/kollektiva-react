import "./App.scss";
import React from "react";
import { Router, Link } from "@reach/router";
import NotFound from "./pages/notFound";
import CreateAd from "./pages/createAd";
import StartPage from "./pages/startPage";
import Footer from "./components /footer";
import ProfilePage from "./pages/profilePage";
import Navbar from "./components /Navbar";

function App() {
  return (

    <div className="App">
      <Navbar/>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create-ad">Create Ad</Link>
        <Link to="/profile">My profile</Link>
      </nav>
      <Router>
        <CreateAd path="/create-ad" />
        <ProfilePage path="/profile"/>
        <StartPage path="/" />
        <NotFound default />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
