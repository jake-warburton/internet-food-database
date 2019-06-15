import { store } from "react-easy-state";

import justNamesAndTags from "../../../static/just_names_and_tags";

/*
How I converted names into slugs

  const recipeNames = recipes.map(node => {
    node.slug = node.name
      .replace(/ /g, "_")
      .replace(/-/g, "_")
      .replace(/\+/g, "plus")
      .replace(/\(/g, "_")
      .replace(/\)/g, "_")
      .replace(/, /g, "_")
      .replace(/,/g, "_")
      .replace(/'/g, "")
      .replace(/"/g, "")
      .replace(/&/g, "and")
      .replace(/£/g, "pound")
      .replace(/\$/g, "dollar")
      .replace(/#/g, "hash")
      .replace(/\?/g, "_")
      .replace(/</g, "_")
      .replace(/>/g, "_")
      .toLowerCase();

  });
*/

const index = store({
  recipes: justNamesAndTags,
  searchTerm: "",
  filteredSearchResults: {
    status: 2,
    message: "No search entered.",
  },
  FilterSearchResults(searchString = "") {
    index.searchTerm = searchString;
    const { searchTerm } = index;

    //  If the search term is not very long, it will return too many results so exit.
    if (searchTerm.length < 2) {
      const errorMessage = {
        status: 0,
        message: "Please enter a longer search term.",
        searchTerm,
      };
      index.filteredSearchResults = errorMessage;
      return false;
    }

    //  Heroes filtered and returned
    const filteredRecipes = justNamesAndTags
      .filter(node => {
        if (node.tags.includes(searchTerm.toLowerCase())) {
          return true;
        }
        if (node.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        }
        return false;
      })
      .map(node => {
        const slug = node.name.replace(/ /g, "_").toLowerCase();

        const returnNode = {
          meta: node,
          link: `/recipe?&slug=${slug}`,
          as: `/hero/${slug}`,
        };
        return returnNode;
      });

    //  Prepare the object to return containing all the results and meta info
    const filteredSearchResults = {
      recipesResults: {
        filteredResults: filteredRecipes,
        count: filteredRecipes.length,
      },
      count: filteredRecipes.length,
      status: 1,
      searchTerm,
    };

    index.filteredSearchResults = filteredSearchResults;
    return true;
  },
});

export default index;
