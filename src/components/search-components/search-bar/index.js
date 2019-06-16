import React, { useState } from "react";
import { view } from "react-easy-state";

import "./style.css";

import SearchStore from "../../../store/search";

function SendSearchRequest(e, searchTerm) {
  e.preventDefault();
  SearchStore.FilterSearchResults(searchTerm);
}

function index() {
  const { filteredSearchResults } = SearchStore;

  const [searchTerm, updateSearchTerm] = useState("");

  return (
    <form onSubmit={e => SendSearchRequest(e, searchTerm)}>
      <div className="w-100 d-flex top-left-corner-rounded top-right-corner-rounded bottom-left-corner-rounded bottom-right-corner-rounded search-results-form-holder">
        <div className="search-results-input-holder">
          <input
            onChange={e => updateSearchTerm(e.target.value)}
            onKeyUp={e => {
              //  Only auto filter if search term is length 2 or more, or things lag
              if (searchTerm.length >= 2) {
                SendSearchRequest(e, searchTerm);
              }
            }}
            defaultValue={SearchStore.searchTerm}
            placeholder="Search recipes.."
            className="w-100 search-results-form-group search-results-input"
          />
        </div>
        <div className="search-results-button-holder">
          <button
            type="submit"
            tabIndex={0}
            className="search-results-form-group w-100 search-results-button"
          >
            {filteredSearchResults.count && filteredSearchResults.count > 0
              ? `${filteredSearchResults.count} results`
              : `Search`}
          </button>
        </div>
      </div>
    </form>
  );
}

export default view(index);
