// #region all meals

// Creates all meals
let meal = {
  id: "meal1",
  name: "Name of dish",
  description: "Description of dish",
  image: "Path to image",
  stars: "How many stars, integer without quotation marks",
  timeToCook: "Time in hours and minutes",
  price: "Price, integer without quotiation marks",
  hidden: false,
  html: "",
};

let meal2 = {
  id: "meal2",
  name: "Name of dish",
  description: "Description of dish",
  image: "Path to image",
  stars: "How many stars, integer without quotation marks",
  timeToCook: "Time in hours and minutes",
  price: "Price, integer without quotiation marks",
  hidden: false,
  html: "",
};

let meal3 = {
  id: "meal3",
  name: "Traditional Swedish Breakfast",
  description:
    "The Swedish breakfast consits of two slices of bread with butter and cheese, a boiled egg...",
  image: "images/SwedishBreakfast.png",
  stars: 4,
  timeToCook: "15 min",
  price: 5,
  hidden: false,
  html: "",
};

let meal4 = {
  id: "meal4",
  name: "Name of dish",
  description: "Description of dish",
  image: "Path to image",
  stars: "How many stars, integer without quotation marks",
  timeToCook: "Time in hours and minutes",
  price: "Price, integer without quotiation marks",
  hidden: false,
  html: "",
};

let meal5 = {
  id: "meal5",
  name: "Name of dish",
  description: "Description of dish",
  image: "Path to image",
  stars: "How many stars, integer without quotation marks",
  timeToCook: "Time in hours and minutes",
  price: "Price, integer without quotiation marks",
  hidden: false,
  html: "",
};

let meal6 = {
  id: "meal6",
  name: "Potato pancakes with lingonberries",
  description:
    "Potato pancakes, aka raggmunk, has been a classic Swedish meal since the early 20th...",
  image: "images/potatoPancakes.jpeg",
  stars: 3,
  timeToCook: "30 min",
  price: 9,
  hidden: false,
  html: "",
};

let meal7 = {
  id: "meal7",
  name: "Name of dish",
  description: "Description of dish",
  image: "Path to image",
  stars: "How many stars, integer without quotation marks",
  timeToCook: "Time in hours and minutes",
  price: "Price, integer without quotiation marks",
  hidden: false,
  html: "",
};

let meal8 = {
  id: "meal8",
  name: "Name of dish",
  description: "Description of dish",
  image: "Path to image",
  stars: "How many stars, integer without quotation marks",
  timeToCook: "Time in hours and minutes",
  price: "Price, integer without quotiation marks",
  hidden: false,
  html: "",
};

let meal9 = {
  id: "meal9",
  name: "Meatballs with mashed potatoes",
  description:
    "Sweden's #1 meal is meatballs, mashed potatoes and cream sauce.",
  image: "images/swedishMeatballs.jpeg",
  stars: 5,
  timeToCook: "1 hr",
  price: 10,
  hidden: false,
  html: "",
};

let meal10 = {
  id: "meal10",
  name: "Name of dish",
  description: "Description of dish",
  image: "Path to image",
  stars: "How many stars, integer without quotation marks",
  timeToCook: "Time in hours and minutes",
  price: "Price, integer without quotiation marks",
  hidden: false,
  html: "",
};

let meal11 = {
  id: "meal11",
  name: "Name of dish",
  description: "Description of dish",
  image: "Path to image",
  stars: "How many stars, integer without quotation marks",
  timeToCook: "Time in hours and minutes",
  price: "Price, integer without quotiation marks",
  hidden: false,
  html: "",
};

let meal12 = {
  id: "meal12",
  name: "Semla",
  description:
    "A cream filled cardamom-flavoured bun that drives Swedes crazy around February.",
  image: "images/semla.jpg",
  stars: 4,
  timeToCook: "1 hr 15 min",
  price: 3,
  hidden: false,
  html: "",
};

// #endregion

const cards = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");

const starSolid = "icons/starSolid.svg";
const starOutlined = "icons/star.svg";

// Minimum characters requierd before search fiters results
const SEARCH_MINIMUM_CHAR_COUNT = 3;

// To place all meal cards on website
function spawnCard(meal) {
  const card = `<div id="${meal.id}" class="swedishBreakfast">
<img
  src="${meal.image}"
  alt="Swedish breakfast with hardbread, eggs and coffee."
/>
<h1>${meal.name}</h1>
<p class="description">
  ${meal.description}
</p>

<div class="time">
  <img src="icons/clock.svg" alt="" />
  <p class="timeToCook">${meal.timeToCook}</p>
</div>
<div class="price">
  <p>$ ${meal.price}</p>
</div>
<div class="reviews">
  <img id="${meal.id}star1" src="icons/starSolid.svg" alt="" />
  <img id="${meal.id}star2" src="icons/starSolid.svg" alt="" />
  <img id="${meal.id}star3" src="icons/starSolid.svg" alt="" />
  <img id="${meal.id}star4" src="icons/starSolid.svg" alt="" />
  <img id="${meal.id}star5" src="icons/starSolid.svg" alt="" />
</div>
</div>`;

  cards.innerHTML += card;
  //setStars(meal);
}

// Contains all meal items
let listOfMeals = [meal3, meal6, meal9, meal12];

// Display all meals as cards on website
listOfMeals.forEach((meal) => {
  spawnCard(meal);
  setStars(meal);
});

// #region search bar

// Makes the search bar functional.

// The following 6 lines of code was adapted from https://javascript.plainenglish.io/how-to-build-a-search-bar-7d8a8a3d9d00 20022-11-26
searchInput.addEventListener("keyup", (event) => {
  const { value } = event.target;

  // Transforms all letters to lowercase.
  const searchQuery = value.toLowerCase();

  // If three letters or more is written - a meal will appear on the screen. If not, all meals will be shown, this is also for when you remove letters.
  if (searchQuery.length >= SEARCH_MINIMUM_CHAR_COUNT) {
    listOfMeals.forEach((meal) => doesMealMatchSearch(meal, searchQuery));
  } else {
    listOfMeals.forEach((meal) => showMeal(meal));
  }
});

// Looks if the letters match with the meals, shows the meals it matches with and hides the other ones.
function doesMealMatchSearch(meal, searchString) {
  if (meal.name.toLowerCase().includes(searchString)) {
    showMeal(meal);
  } else {
    hideMeal(meal);
  }
}

// Function to hide and show meals.
function hideMeal(meal) {
  meal.hidden = true;
  let mealElement = document.getElementById(meal.id);
  mealElement.style.display = "none";
}

function showMeal(meal) {
  meal.hidden = false;
  let mealElement = document.getElementById(meal.id);
  mealElement.style.display = "block";
}

// #endregion

// Iactivates/activates stars in meal cards
function setStars(meal) {
  const parent = document.getElementById(meal.id);
  const star1 = parent.querySelector("#" + meal.id + "star1");
  const star2 = parent.querySelector("#" + meal.id + "star2");
  const star3 = parent.querySelector("#" + meal.id + "star3");
  const star4 = parent.querySelector("#" + meal.id + "star4");
  const star5 = parent.querySelector("#" + meal.id + "star5");

  if (meal.stars >= 1) {
    star1.src = starSolid;
  } else {
    star1.src = starOutlined;
  }
  if (meal.stars >= 2) {
    star2.src = starSolid;
  } else {
    star2.src = starOutlined;
  }
  if (meal.stars >= 3) {
    star3.src = starSolid;
  } else {
    star3.src = starOutlined;
  }
  if (meal.stars >= 4) {
    star4.src = starSolid;
  } else {
    star4.src = starOutlined;
  }
  if (meal.stars >= 5) {
    star5.src = starSolid;
  } else {
    star5.src = starOutlined;
  }
}
