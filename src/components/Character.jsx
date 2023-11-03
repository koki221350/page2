import React from "react";
import "../style/caracter.css";

const Character = () => {
  const charcterslist = [
    "./penguin/default_penguin.png",
    "./orangutan/default_orangutan.png",
    "./turtle/default_turtle.png",
    "./penguin/default_penguin.png",
    "./orangutan/default_orangutan.png",
    "./turtle/default_turtle.png",
  ];

  const make_character = (key, src) => {
    return (
      <div className="character-item" key={key}>
        <img src={src} alt="penguinimg" className="character-image" />
      </div>
    );
  };

  return (
    <footer>
      <div className="character">
        <div className="character-item-wrapper">
          {charcterslist.map((item, index) => make_character(index, item))}
        </div>
      </div>
    </footer>
  );
};

export default Character;
