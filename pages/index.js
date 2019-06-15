import React from "react";
import PropTypes from "prop-types";

import Layout from "../src/layouts/home";

import SearchBar from "../src/components/search-components/search-bar";

function index() {
  const pageData = {
    pageName: "Home",
  };

  return (
    <Layout pagedata={pageData}>
      <div className="container my-auto">
        <SearchBar />
      </div>
    </Layout>
  );
}

export default index;
