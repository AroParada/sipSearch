// button to go to the search page
import React from "react";
import { Link } from 'react-router-dom';
import HomeNavBar from "../components/HomeNavBar";
import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <HomeNavBar />
      <Slider />
      <button>
        <Link to="/"> Search</Link>
      </button>
      
    </>
  );
}

export default Home;
