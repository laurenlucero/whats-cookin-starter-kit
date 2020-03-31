const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe-class');
const Ingredient = require('../src/Ingredients-class');
const mockData = require('../data/mock-data');

describe('Recipe', function() {

  let recipe;
  let ingredient;
  let mockRecipes;

  beforeEach(function() {

    recipe1 = new Recipe({
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
            {
                "id": 20081,
                "quantity": {
                    "amount": 1.5,
                    "unit": "c"
                }
            },
            {
                "id": 18372,
                "quantity": {
                    "amount": 0.5,
                    "unit": "tsp"
                }
            },
            {
                "id": 1123,
                "quantity": {
                    "amount": 1,
                    "unit": "large"
                }
            }
        ],
      "instructions": [
            {
                "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
                "number": 1
            },
            {
                "instruction": "Add egg and vanilla and mix until combined.",
                "number": 2
            },
            {
                "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
                "number": 3
            }
        ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
            "antipasti",
            "starter",
            "snack",
        ]
    });

    ingredient1 = new Ingredient(20081, "wheat flour", 142);
    ingredient2 = new Ingredient(18372, "bicarbonate of soda", 582);
    ingredient3 = new Ingredient(1123, "eggs", 472);

    mockRecipes = [{
            "id": 678353,
            "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
            "ingredients": [
                {
                    "id": 1009016,
                    "quantity": {
                        "amount": 1.5,
                        "unit": "cups"
                    }
                },
                {
                    "id": 9003,
                    "quantity": {
                        "amount": 2,
                        "unit": ""
                    }
                },
                {
                    "id": 20027,
                    "quantity": {
                        "amount": 1,
                        "unit": "tablespoon"
                    }
                },
                {
                    "id": 1002046,
                    "quantity": {
                        "amount": 1,
                        "unit": "tablespoon"
                    }
                },
                {
                    "id": 11215,
                    "quantity": {
                        "amount": 1,
                        "unit": "clove"
                    }
                },
                {
                    "id": 1012046,
                    "quantity": {
                        "amount": 1,
                        "unit": "tablespoon"
                    }
                },
                {
                    "id": 19911,
                    "quantity": {
                        "amount": 0.25,
                        "unit": "cup"
                    }
                },
                {
                    "id": 16112,
                    "quantity": {
                        "amount": 1,
                        "unit": "tablespoon"
                    }
                },
                {
                    "id": 10010062,
                    "quantity": {
                        "amount": 24,
                        "unit": "ounce"
                    }
                },
                {
                    "id": 1102047,
                    "quantity": {
                        "amount": 4,
                        "unit": "servings"
                    }
                },
                {
                    "id": 16124,
                    "quantity": {
                        "amount": 1,
                        "unit": "tablespoon"
                    }
                },
                {
                    "id": 1016168,
                    "quantity": {
                        "amount": 1,
                        "unit": "tablespoon"
                    }
                }
            ],
            "instructions": [
                {
                    "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
                    "number": 1
                }
            ],
            "name": "Maple Dijon Apple Cider Grilled Pork Chops",
            "tags": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ]
        },
        {
            "id": 412309,
            "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
            "ingredients": [
                {
                    "id": 1002030,
                    "quantity": {
                        "amount": 4,
                        "unit": "teaspoons"
                    }
                },
                {
                    "id": 19334,
                    "quantity": {
                        "amount": 8,
                        "unit": "tablespoons"
                    }
                },
                {
                    "id": 1001,
                    "quantity": {
                        "amount": 2,
                        "unit": "cups"
                    }
                },
                {
                    "id": 4582,
                    "quantity": {
                        "amount": 4,
                        "unit": "servings"
                    }
                },
                {
                    "id": 2031,
                    "quantity": {
                        "amount": 4,
                        "unit": "teaspoons"
                    }
                },
                {
                    "id": 5100,
                    "quantity": {
                        "amount": 1,
                        "unit": "pound"
                    }
                },
                {
                    "id": 2009,
                    "quantity": {
                        "amount": 4,
                        "unit": "teaspoons"
                    }
                },
                {
                    "id": 1022020,
                    "quantity": {
                        "amount": 4,
                        "unit": "teaspoons"
                    }
                },
                {
                    "id": 6168,
                    "quantity": {
                        "amount": 8,
                        "unit": "cups"
                    }
                },
                {
                    "id": 9176,
                    "quantity": {
                        "amount": 0.5,
                        "unit": "cup"
                    }
                },
                {
                    "id": 2026,
                    "quantity": {
                        "amount": 4,
                        "unit": "teaspoons"
                    }
                },
                {
                    "id": 1042047,
                    "quantity": {
                        "amount": 1.5,
                        "unit": "tablespoons"
                    }
                },
                {
                    "id": 1042047,
                    "quantity": {
                        "amount": 4,
                        "unit": "teaspoons"
                    }
                }
            ],
            "instructions": [
                {
                    "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
                    "number": 1
                }
            ],
            "name": "Dirty Steve's Original Wing Sauce",
            "tags": [
                "sauce",
                "side dish"
            ]
        },
        {
            "id": 741603,
            "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
            "ingredients": [
                {
                    "id": 20081,
                    "quantity": {
                        "amount": 1,
                        "unit": "cup"
                    }
                },
                {
                    "id": 18371,
                    "quantity": {
                        "amount": 2,
                        "unit": "teaspoons"
                    }
                },
                {
                    "id": 9040,
                    "quantity": {
                        "amount": 12,
                        "unit": "servings"
                    }
                },
                {
                    "id": 20011,
                    "quantity": {
                        "amount": 1,
                        "unit": "cup"
                    }
                },
                {
                    "id": 1001,
                    "quantity": {
                        "amount": 2,
                        "unit": "tablespoons"
                    }
                },
                {
                    "id": 1001,
                    "quantity": {
                        "amount": 6,
                        "unit": "tablespoons"
                    }
                },
                {
                    "id": 1230,
                    "quantity": {
                        "amount": 2,
                        "unit": "cups"
                    }
                },
                {
                    "id": 1123,
                    "quantity": {
                        "amount": 2,
                        "unit": ""
                    }
                },
                {
                    "id": 19296,
                    "quantity": {
                        "amount": 12,
                        "unit": "servings"
                    }
                },
                {
                    "id": 16098,
                    "quantity": {
                        "amount": 12,
                        "unit": "servings"
                    }
                },
                {
                    "id": 2047,
                    "quantity": {
                        "amount": 1,
                        "unit": "teaspoon"
                    }
                },
                {
                    "id": 19335,
                    "quantity": {
                        "amount": 2,
                        "unit": "teaspoons"
                    }
                }
            ],
            "instructions": [
                {
                    "instruction": "Watch how to make this recipe.",
                    "number": 1
                },
                {
                    "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
                    "number": 2
                },
                {
                    "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
                    "number": 3
                },
                {
                    "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
                    "number": 4
                },
                {
                    "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
                    "number": 5
                },
                {
                    "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
                    "number": 6
                },
                {
                    "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
                    "number": 7
                }
            ],
            "name": "Elvis Pancakes",
            "tags": [
                "side dish"
            ]
        }]
  });

  it('should be an instance of Recipe', function() {
    expect(recipe1).to.be.an.instanceOf(Recipe);
  });

  it('should have an id', function() {
    expect(recipe1.id).to.equal(595736);
  });

  it('should have an image', function() {
    expect(recipe1.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  });

  it('should have a list of ingredients needed to make the recipe', function() {
    expect(recipe1.ingredients).to.deep.equal([{
        "id": 20081,
        "quantity": {
            "amount": 1.5,
            "unit": "c"
        }
    },
    {
        "id": 18372,
        "quantity": {
            "amount": 0.5,
            "unit": "tsp"
        }
    },
    {
        "id": 1123,
        "quantity": {
            "amount": 1,
            "unit": "large"
        }
    }]);
  });

  it('should have a list of corresponding instructions', function() {
    expect(recipe1.instructions).to.deep.equal([
          {
              "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
              "number": 1
          },
          {
              "instruction": "Add egg and vanilla and mix until combined.",
              "number": 2
          },
          {
              "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
              "number": 3
          }
      ]);
  });

  it('should have a name', function() {
    expect(recipe1.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  });

  it('should have a list of tags', function() {
    expect(recipe1.tags).to.deep.equal([
          "antipasti",
          "starter",
          "snack",
      ]);
  });

  it('should get the correct ingredients id\'s', function() {
    recipe1.matchIngredientsIds();
    expect(recipe1.matchIngredientsIds()).to.deep.equal([{
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    },
    {
      "id": 1123,
      "name": "eggs",
      "estimatedCostInCents": 472
    }]);
  });

  it('should get the total cost of ingredients needed to make recipe', function() {
    recipe1.getIngredientsCost();
    expect(recipe1.getIngredientsCost()).to.equal(1196);
  });

  it('should return the instructions to make the recipe', function() {
    recipe1.getInstructions();
    expect(recipe1.getInstructions()).to.deep.equal([
          {
              "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
              "number": 1
          },
          {
              "instruction": "Add egg and vanilla and mix until combined.",
              "number": 2
          },
          {
              "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
              "number": 3
          }
      ]);
  });

  it('should be able to view a list of recipes and filter recipes by tag', function() {
    expect(recipe.filterRecipes('side dish')).to.deep.equal([{
        "id": 412309,
        "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
        "ingredients": [
            {
                "id": 1002030,
                "quantity": {
                    "amount": 4,
                    "unit": "teaspoons"
                }
            },
            {
                "id": 19334,
                "quantity": {
                    "amount": 8,
                    "unit": "tablespoons"
                }
            },
            {
                "id": 1001,
                "quantity": {
                    "amount": 2,
                    "unit": "cups"
                }
            },
            {
                "id": 4582,
                "quantity": {
                    "amount": 4,
                    "unit": "servings"
                }
            },
            {
                "id": 2031,
                "quantity": {
                    "amount": 4,
                    "unit": "teaspoons"
                }
            },
            {
                "id": 5100,
                "quantity": {
                    "amount": 1,
                    "unit": "pound"
                }
            },
            {
                "id": 2009,
                "quantity": {
                    "amount": 4,
                    "unit": "teaspoons"
                }
            },
            {
                "id": 1022020,
                "quantity": {
                    "amount": 4,
                    "unit": "teaspoons"
                }
            },
            {
                "id": 6168,
                "quantity": {
                    "amount": 8,
                    "unit": "cups"
                }
            },
            {
                "id": 9176,
                "quantity": {
                    "amount": 0.5,
                    "unit": "cup"
                }
            },
            {
                "id": 2026,
                "quantity": {
                    "amount": 4,
                    "unit": "teaspoons"
                }
            },
            {
                "id": 1042047,
                "quantity": {
                    "amount": 1.5,
                    "unit": "tablespoons"
                }
            },
            {
                "id": 1042047,
                "quantity": {
                    "amount": 4,
                    "unit": "teaspoons"
                }
            }
        ],
        "instructions": [
            {
                "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
                "number": 1
            }
        ],
        "name": "Dirty Steve's Original Wing Sauce",
        "tags": [
            "sauce",
            "side dish"
        ]
    },
    {
        "id": 741603,
        "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
        "ingredients": [
            {
                "id": 20081,
                "quantity": {
                    "amount": 1,
                    "unit": "cup"
                }
            },
            {
                "id": 18371,
                "quantity": {
                    "amount": 2,
                    "unit": "teaspoons"
                }
            },
            {
                "id": 9040,
                "quantity": {
                    "amount": 12,
                    "unit": "servings"
                }
            },
            {
                "id": 20011,
                "quantity": {
                    "amount": 1,
                    "unit": "cup"
                }
            },
            {
                "id": 1001,
                "quantity": {
                    "amount": 2,
                    "unit": "tablespoons"
                }
            },
            {
                "id": 1001,
                "quantity": {
                    "amount": 6,
                    "unit": "tablespoons"
                }
            },
            {
                "id": 1230,
                "quantity": {
                    "amount": 2,
                    "unit": "cups"
                }
            },
            {
                "id": 1123,
                "quantity": {
                    "amount": 2,
                    "unit": ""
                }
            },
            {
                "id": 19296,
                "quantity": {
                    "amount": 12,
                    "unit": "servings"
                }
            },
            {
                "id": 16098,
                "quantity": {
                    "amount": 12,
                    "unit": "servings"
                }
            },
            {
                "id": 2047,
                "quantity": {
                    "amount": 1,
                    "unit": "teaspoon"
                }
            },
            {
                "id": 19335,
                "quantity": {
                    "amount": 2,
                    "unit": "teaspoons"
                }
            }
        ],
        "instructions": [
            {
                "instruction": "Watch how to make this recipe.",
                "number": 1
            },
            {
                "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
                "number": 2
            },
            {
                "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
                "number": 3
            },
            {
                "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
                "number": 4
            },
            {
                "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
                "number": 5
            },
            {
                "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
                "number": 6
            },
            {
                "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
                "number": 7
            }
        ],
        "name": "Elvis Pancakes",
        "tags": [
            "side dish"
        ]
    }])
  });

// should be able to search recipes by ingredients

});
