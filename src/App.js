import React from "react";

import "./styles.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Character from "./components/Character";
export const App = () => {
  return (
    <>
      <Header />

      <div className="main">
        <h1>YOBIWAVE</h1>　<h3>Check the Environmental Impact</h3>
        <SearchBar />
      </div>

      <Character />
      <Footer />
    </>
  );
};

export default App;
