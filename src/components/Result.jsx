import React from "react";
import "../style/result.css";

const Result = ({ result, setresult }) => {
  const result_panel = (animal, img_src, score, explain) => {
    return (
      <div className="item" key={animal}>
        <div className="image-box">
          <img src={img_src} alt="penguinimg2" className="animal-img" />
        </div>

        <div className="description-box">
          <div className="each-score">{score}</div>
          <div className="explain">{explain}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="result">
      <div className="resulttitle">Result</div>
      <div className="container">
        {result.map((item, index) =>
          result_panel(item.animal, item.img_src, item.score, item.explain)
        )}
      </div>
    </div>
  );
};
export default Result;
