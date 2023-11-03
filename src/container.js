import React, { useState } from "react";

import "./style/styles.css";
import "./style/container.css";

import SearchBar from "./components/SearchBar";
import Character from "./components/Character";
import Title from "./components/Title";
import Result from "./components/Result";
import Products from "./components/Products";
import SearchMore from "./components/SearchMore";

const Container = () => {
  const test = [
    {
      animal: "penguin",
      img_src: "./penguin/good_penguin.png",
      score: "7",
      explain:
        "nibh mi, posuere quis dui ut, laoreet accumsan mi. Maecenas auctor ut est eu",
    },
    {
      animal: "turtle",
      img_src: ".turtle/bad_turtle.png",
      score: "6",
      explain:
        "nibh mi, posuere quis dui ut, laoreet accumsan mi. Maecenas auctor ut est eu",
    },
    {
      animal: "orangutan",
      img_src: ".orangutan/normal_orangutan.png",
      score: "5",
      explain:
        "nibh mi, posuere quis dui ut, laoreet accumsan mi. Maecenas auctor ut est eu",
    },
  ];
  const [gotoNext, setgotoNext] = useState(false);
  const [result, setresult] = useState(test);
  return (
    <div className="container">
      {!gotoNext && (
        <>
          <Title />
          <SearchBar setgotoNext={setgotoNext} setresult={setresult} />
          <Character />
        </>
      )}
      {gotoNext && ( // Conditional Rendering
        <>
          <Result setresult={setresult} result={result} />
          <SearchMore setgotoNext={setgotoNext} />
        </>
      )}
    </div>
  );
};

export default Container;
