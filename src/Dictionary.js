import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.default);
  let [searchData, setSearchData] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey = `563492ad6f9170000100000121a3289e7cd5471d9e39a7a5768a496a`;
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleDictionaryResponse(response) {
    setSearchData(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
