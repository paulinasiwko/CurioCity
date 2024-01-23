const foodAppID = "c2f96cfc";
const foodApiKey = "ae1a63d9274452ced8ffd14d5a60ba49";


function getFood(cityName) {

    const queryURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${cityName}&app_id=${foodAppID}&app_key=${foodApiKey}`;
    fetch(queryURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        displayRecipe(data);
    })

}

function displayRecipe(food) {
    const recipeName = food.hits[3].recipe.label;
    const image = food.hits[3].recipe.image;
    const recipeLink = food.hits[3].recipe.url;
    const cusineType = food.hits[3].recipe.cuisineType[0];
    const ingredients = food.hits[3].recipe.ingredientLines;

    const foodDiv = document.getElementById("food");

    foodDiv.innerHTML = `
        <h5 class="card-title">Food that goes great with the movie</h5>
        <h5 class="foodTitle">${recipeName}</h5>
        <p><h6>Cusine type:</h6> ${cusineType}</p>
        <img src="${image}" alt="${recipeName} photo" class="foodImg">
        <a href="${recipeLink}">Click here to see full recipe.</a>
        <h6>Shopping list: </h6>
    `; 

    for (let i = 0; i < ingredients.length; i++) {
        const ingredient = ingredients[i];
        const ingredientEl = document.createElement("li");
        ingredientEl.textContent = ingredient;
        foodDiv.append(ingredientEl);
        console.log(ingredient);
    }
}

$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var city = params.get('city');
    getFood(city);
});