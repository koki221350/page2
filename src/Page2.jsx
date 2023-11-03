import React from "react";
import "./styles.css";
import "./headerfooter.css";
import "./result.css";
import "./searchbar.css";
import Header from "./components/Header";
import Result from "./components/Result";
import Products from "./components/Products";
import Footer from "./components/Footer";
import SearchMore from "./components/SearchMore";

export const Page2 = () => {
  return (
    <>
      <Result />
      <Products message="ポテトチップス" />
      <SearchMore />
    </>
  );
};
export default Page2;
