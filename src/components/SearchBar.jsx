import React, { useState } from "react";
import "../style/searchbar.css";

const SearchBar = ({ setgotoNext, setresult }) => {
  const test = [
    {
      animal: "penguin",
      img_src: "./penguin/good_penguin.png",
      score: "8",
      explain: "CO2の排出が比較的少なく、ペンギン生態への影響は限定的です。",
    },
    {
      animal: "turtle",
      img_src: "./turtle/bad_turtle.png",
      score: "6",
      explain:
        "水質汚染物質の利用が目立ち、海ガメの生態への影響が懸念されます。",
    },
    {
      animal: "orangutan",
      img_src: "./orangutan/good_orangutan.png",
      score: "5",
      explain: "他商品に比べて、オラウータン生態への影響は限定的です",
    },
  ];
  const [search, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = async () => {
    // ここでAPIに検索クエリを送信し、返信を待つコードを実装
    // const apiUrl = "https://api.yobiwave.com/LCINames/" + search;
    const apiUrl = "https://jsonplaceholder.typicode.com"; //test用
    console.log(apiUrl);
    setresult(test);
    setgotoNext(true);
    // const response = await fetch(apiUrl).then((res) => {
    //   res.json();
    //   console.log(res);
    // });
  };

  // Enterキーが押されたときのハンドラー
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // handleSearchClick();
    }
  };

  return (
    <div className="search-container">
      <div className="search">
        <div className="icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="&#227;&#130;&#181;&#227;&#131;&#188;&#227;&#131;&#129;&#227;&#130;&#162;&#227;&#130;&#164;&#227;&#130;&#179;&#227;&#131;&#179; (1) 1"
              clipPath="url(#clip0_116_30)"
            >
              <g id="Group">
                <path
                  id="Vector"
                  d="M15.4773 13.2362C15.4773 13.2362 13.3354 11.3627 12.823 10.8509C12.0711 10.1029 11.7702 9.74261 12.0357 9.13433C13.1968 6.7662 12.7951 3.82639 10.8257 1.85752C8.34958 -0.619172 4.33383 -0.619172 1.85743 1.85752C-0.618979 4.33452 -0.618979 8.34905 1.85743 10.8264C3.82571 12.7946 6.76643 13.1963 9.13365 12.0355C9.74196 11.7703 10.1031 12.0711 10.8509 12.8234C11.3629 13.3355 13.2355 15.4777 13.2355 15.4777C14.207 16.4487 14.9545 15.8511 15.4032 15.403C15.8511 14.9546 16.4489 14.2074 15.4773 13.2362ZM8.93808 8.93786C7.50371 10.3713 5.17908 10.3713 3.7453 8.93786C2.31155 7.50439 2.31155 5.17917 3.7453 3.7457C5.17908 2.31223 7.50371 2.31223 8.93808 3.7457C10.3719 5.17917 10.3719 7.50439 8.93808 8.93786Z"
                  fill="#B5B5B5"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_116_30">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearchClick}>
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g clipPath="url(#clip0_116_33)">
              <path
                d="M24.1832 20.6815C24.1832 20.6815 20.8364 17.7542 20.0359 16.9546C18.8609 15.7857 18.3909 15.2228 18.8057 14.2724C20.6199 10.5722 19.9923 5.97874 16.9151 2.90237C13.0462 -0.967456 6.77155 -0.967456 2.90216 2.90237C-0.967224 6.77268 -0.967224 13.0454 2.90216 16.9162C5.9776 19.9916 10.5725 20.6192 14.2713 18.8054C15.2217 18.3911 15.786 18.8612 16.9544 20.0366C17.7544 20.8366 20.6804 24.1839 20.6804 24.1839C22.1984 25.701 23.3664 24.7674 24.0675 24.0672C24.7672 23.3665 25.7013 22.1991 24.1832 20.6815ZM13.9657 13.9654C11.7245 16.2052 8.09225 16.2052 5.85197 13.9654C3.61173 11.7256 3.61173 8.09246 5.85197 5.85266C8.09225 3.61287 11.7245 3.61287 13.9657 5.85266C16.206 8.09246 16.206 11.7256 13.9657 13.9654Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_116_33">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
