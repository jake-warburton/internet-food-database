import React, { useState, useEffect } from "react";

import SearchResults from "../search-results";

import SearchStore from "../../../store/search";

import "./style.css";

function SendSearchRequest(e, searchTerm) {
  e.preventDefault();
  SearchStore.FilterSearchResults(searchTerm);
}

function ShowSearchResultsHolder() {
  const searchResultsHolder = document.getElementById("search-results-holder");
  searchResultsHolder.classList.remove("search-results-closed-height");
}

function HideSearchResultsHolder() {
  const searchResultsHolder = document.getElementById("search-results-holder");
  searchResultsHolder.classList.add("search-results-closed-height");
}

function index() {
  const [searchTerm, updateSearchTerm] = useState("");

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
        <form onSubmit={e => SendSearchRequest(e, searchTerm)}>
          <div className="w-100 d-flex top-left-corner-rounded top-right-corner-rounded bottom-left-corner-rounded bottom-right-corner-rounded search-results-form-holder">
            <div className="search-results-input-holder">
              <input
                onChange={e => updateSearchTerm(e.target.value)}
                defaultValue={SearchStore.searchTerm}
                className="w-100 search-results-form-group search-results-input"
              />
            </div>
            <div className="search-results-button-holder">
              <button
                type="submit"
                tabIndex={0}
                className="search-results-form-group w-100 search-results-button"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        <div
          id="search-results-holder"
          className="w-100 search-results-holder search-results-closed-height"
        >
          <div className="bottom-left-corner-rounded bottom-right-corner-rounded pt-2 pb-4 w-100 search-results-body">
            <div className="search-results-scrollable-region px-4">
              <SearchResults />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
