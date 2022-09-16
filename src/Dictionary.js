import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [searchData, setSearchData] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setSearchData(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <header>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search anything..."
            onChange={handleKeywordChange}
          />
        </form>
      </header>
      <Results data={searchData} />
    </div>
  );
}
