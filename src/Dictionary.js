import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.default);
  let [searchData, setSearchData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setSearchData(response.data[0]);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <header>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search anything..."
              onChange={handleKeywordChange}
              defaultValue={props.default}
            />
          </form>
        </header>
        <Results data={searchData} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
