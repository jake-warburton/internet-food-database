function ConvertRecipeNamesIntoSlugs(name) {
  const recipeSlug = name
    .replace(/ /g, "_")
    .replace(/-/g, "_")
    .replace(/\+/g, "plus")
    .replace(/\(/g, "_")
    .replace(/\)/g, "_")
    .replace(/, /g, "_")
    .replace(/,/g, "_")
    .replace(/\. /g, "_")
    .replace(/\./g, "_")
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

  return recipeSlug;
}

module.exports = ConvertRecipeNamesIntoSlugs;
