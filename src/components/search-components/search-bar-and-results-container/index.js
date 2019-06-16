import React, { useEffect } from "react";

import SearchBar from "../search-bar";
import SearchResults from "../search-results";

import "./style.css";

function ShowSearchResultsHolder() {
  const searchResultsHolder = document.getElementById("search-results-holder");
  searchResultsHolder.classList.remove("search-results-closed-height");
}

function HideSearchResultsHolder() {
  const searchResultsHolder = document.getElementById("search-results-holder");
  searchResultsHolder.classList.add("search-results-closed-height");
}

function index() {
  useEffect(() => {
    const searchResultsDiv = document.getElementById("search-results-div");
    searchResultsDiv.addEventListener("mouseenter", () => {
      ShowSearchResultsHolder();
    });
    searchResultsDiv.addEventListener("mouseleave", () => {
      HideSearchResultsHolder();
    });
  });

  return (
    <>
      <div id="search-results-div">
        <SearchBar />
        <div
          id="search-results-holder"
          className="search-results-closed-height"
        >
          <SearchResults />
        </div>
      </div>
    </>
  );
}

export default index;
