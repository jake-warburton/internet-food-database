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
  resultsPerPage: 40,
  currentOffset: 0,
  UpdateCurrentOffset(newOffset) {
    index.currentOffset = newOffset;
    //  Trigger filter function to apply new offset
    index.PrivateFilterSearchResults(index.searchTerm);
  },
  filteredSearchResults: {
    status: 2,
    message: "No search entered.",
    count: 0,
  },
  UpdateSearchTerm(searchString = "") {
    index.searchTerm = searchString;
    //  Update offset to 0, as we are performing a new search so we want to start from the beginning
    index.UpdateCurrentOffset(0);
    //  Trigger filter function to apply new filter
    index.PrivateFilterSearchResults();
  },
  PrivateFilterSearchResults() {
    const { searchTerm } = index;
    let resultsCount = justNamesAndTags.length;

    //  If the search term is not very long, it will return too many results so exit.
    if (searchTerm.length < 1) {
      const errorMessage = {
        status: 0,
        message: "Please enter a longer search term.",
        searchTerm,
        count: 0,
      };
      index.filteredSearchResults = errorMessage;
      return false;
    }

    //  Heroes filtered and returned
    const filteredRecipes = justNamesAndTags.filter(node => {
      if (node.tags.includes(searchTerm.toLowerCase())) {
        return true;
      }
      if (node.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      return false;
    });

    resultsCount = filteredRecipes.length;

    //  Update the offset to 0 if the amount of recipes is fewer than the offset
    if (resultsCount < index.currentOffset) {
      index.currentOffset = 0;
    }

    const returnedRecipes = filteredRecipes
      .slice(index.currentOffset, index.currentOffset + index.resultsPerPage)
      .map(node => {
        const slug = node.name.replace(/ /g, "_").toLowerCase();

        const returnNode = {
          meta: node,
          link: `/recipe?&slug=${slug}`,
          as: `/recipe/${slug}`,
        };
        return returnNode;
      });

    //  Prepare the object to return containing all the results and meta info
    const filteredSearchResults = {
      recipesResults: {
        filteredResults: returnedRecipes,
        count: resultsCount,
      },
      count: resultsCount,
      status: 1,
      searchTerm,
    };

    index.filteredSearchResults = filteredSearchResults;
    return true;
  },
});

export default index;
