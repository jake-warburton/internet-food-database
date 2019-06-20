const ConvertRecipeNamesIntoSlugs = require("..");

/*
describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});
*/

test("pass the name parameter of `Onion-Soup with Crab` and receives the slug `onion_soup_with_crab`", () => {
  expect(ConvertRecipeNamesIntoSlugs(`Onion-Soup with Crab`)).toBe(
    "onion_soup_with_crab",
  );
});

test("pass the name parameter of `£1 Fish. Very very good, and, very very cheap.` and receives the slug `pound1_fish__very_very_good__and__very_very_cheap_`", () => {
  expect(
    ConvertRecipeNamesIntoSlugs(
      `£1 Fish. Very very good, and, very very cheap.`,
    ),
  ).toBe("pound1_fish__very_very_good__and__very_very_cheap_");
});
