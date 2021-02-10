import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={searchCocktail}>
        <div className="form-control">
          <label htmlFor="name"> Search your favourite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
