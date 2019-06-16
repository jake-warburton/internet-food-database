import React from "react";
import { view } from "react-easy-state";

import SearchStore from "../../../store/search";

import "./style.css";

function index() {
  const { filteredSearchResults, currentOffset, resultsPerPage } = SearchStore;

  let displayPrev = -1;
  let displayNext = -1;

  if (currentOffset > resultsPerPage) {
    displayPrev = currentOffset - resultsPerPage;
  } else if (currentOffset > 0) {
    displayPrev = 0;
  }

  if (currentOffset + resultsPerPage < filteredSearchResults.count) {
    displayNext = currentOffset + resultsPerPage;
  }

  return (
    <div className="w-100 d-flex justify-content-center align-items-center mt-2 py-2 search-pagination">
      {displayPrev >= 0 && (
        <div
          className="pagination-button mx-2"
          role="button"
          tabIndex={0}
          onClick={() => SearchStore.UpdateCurrentOffset(displayPrev)}
          onKeyDown={() => SearchStore.UpdateCurrentOffset(displayPrev)}
        >
          Previous
        </div>
      )}
      {displayNext >= 0 && (
        <div
          className="pagination-button mx-2"
          role="button"
          tabIndex={0}
          onClick={() => SearchStore.UpdateCurrentOffset(displayNext)}
          onKeyDown={() => SearchStore.UpdateCurrentOffset(displayNext)}
        >
          Next
        </div>
      )}
    </div>
  );
}

export default view(index);
