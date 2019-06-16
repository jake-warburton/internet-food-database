import React from "react";

import Layout from "../src/layouts/home";

import SearchBar from "../src/components/search-components/search-bar";
import NewSearchResults from "../src/components/search-components/new-search-results";
import Pagination from "../src/components/search-components/pagination";

function index() {
  const pageData = {
    pageName: "Home",
  };

  return (
    <Layout pagedata={pageData}>
      <div className="container mt-5">
        <SearchBar />
        <NewSearchResults />
        <Pagination />
      </div>
    </Layout>
  );
}

export default index;
