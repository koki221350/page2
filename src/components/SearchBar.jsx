import React from "react";

export const SearchBar = () => {
  return (
    <>
      <form action="#" className="search-form-002">
        <label>
          <input type="text" placeholder="キーワードを入力" />
        </label>
        <button type="submit" aria-label="検索"></button>　
      </form>
    </>
  );
};
export default SearchBar;
