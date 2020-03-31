let allRecipes = [];

window.addEventListener('load', function() {
  displayAllRecipes();
  displayUserData();
});

function displayAllRecipes() {
  let mainPage = document.querySelector('.main-page');
  allRecipes = recipeData.map(recipe => {
  let newRecipe = new Recipe(recipe);
    mainPage.innerHTML += `<section class="recipe-card">
      <img class="recipe-img" src=${newRecipe.image} alt=${newRecipe.name}>
      <div class="name-n-btns">
      <h4 class="recipe-name">${newRecipe.name}</h4>
      <i class="far fa-heart"></i>
      <i class="far fa-bookmark"></i>
      <div>
    </section>`
    return newRecipe
 });
}
// change function name ^ to match return?

function displayUserData() {
  let randomUser = usersData[Math.floor(Math.random() * usersData.length)];
  let currentUser = new User(randomUser);
  const userName = document.querySelector('.user-name');
  userName.innerHTML = `${currentUser.name}`;
}

// user to add/remove favorites
