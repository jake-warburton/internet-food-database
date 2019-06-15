import React from "react";
import PropTypes from "prop-types";

import Layout from "../src/layouts/default";

import SearchStore from "../src/store/search";

function DisplayRecipeNames(props) {
  const { recipes } = props;

  const recipeNames = recipes.map(node => {
    const { name, tags, slug } = node;
    return (
      <div className="col-12">
        {name}
        {tags}
        {slug}
      </div>
    );
  });

  return <div className="row">{recipeNames}</div>;
}

DisplayRecipeNames.propTypes = {
  recipes: PropTypes.node.isRequired,
};

function index() {
  const { recipes } = SearchStore;

  const pageData = {
    pageName: "Home",
  };

  return (
    <Layout pagedata={pageData}>
      <div className="container">
        <DisplayRecipeNames recipes={recipes} />
        Home
      </div>
    </Layout>
  );
}

export default index;
