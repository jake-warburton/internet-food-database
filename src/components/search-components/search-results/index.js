import React from "react";
import Link from "next/link";
import Router from "next/router";
import { view } from "react-easy-state";

//  import a function
import { search } from "../search";

import SearchStore from "../../../store/search";

import "./style.css";

function DisplayOneResult(name, link, as, tags) {
  return (
    <Link href={link} as={as}>
      <a
        onMouseEnter={() => {
          Router.prefetch(as);
        }}
      >
        <div className="w-100 pt-2 d-flex align-items-center">
          <span>{tags}</span>
          <span className="pl-2">{name}</span>
        </div>
      </a>
    </Link>
  );
}

function DisplayResults(filteredResults) {
  const itemsView = filteredResults.recipesResults.filteredResults.map(node => {
    const { link, as, tags } = node;
    return DisplayOneResult(node.meta.name, link, as, tags);
  });

  return (
    <div>
      {itemsView.length > 0 && (
        <div className="pb-4 w-100">
          <div className="w-100 text-center">
            <h5>{`${itemsView.length} Items`}</h5>
          </div>
          {itemsView}
        </div>
      )}
    </div>
  );
}

function index() {
  const { filteredSearchResults } = SearchStore;

  const myString = search();
  console.log("my string: ", myString);

  return (
    <div className="container px-0 py-2">
      {filteredSearchResults.status === 0 && <div>Search term too short</div>}
      {filteredSearchResults.status === 1 && (
        <div>{DisplayResults(filteredSearchResults)}</div>
      )}
      {filteredSearchResults.status === 2 && <div>No search made yet</div>}
    </div>
  );
}

export default view(index);
