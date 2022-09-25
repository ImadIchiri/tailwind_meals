const mainMenu = document.getElementById("main_menu");
const hamburgerMenu = document.getElementById("hamburger_menu");
const mealsContainer = document.getElementById("meals_container");

hamburgerMenu.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});

window.addEventListener("load", (e) => {
  const fetchData = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    );
    const data = await response.json();
    // console.log(data.meals[0].strMeal);
    // console.log(data.meals[0].strCategory);
    // console.log(data.meals[0].strMealThumb);
    // console.log(data.meals[0].strArea);

    data.meals.forEach((meal) => {
      console.log(meal);
      const card = createMealCard(`
          <div class="card">
              <div class="card_category">
                <i class="fa-solid fa-utensils text-2xl mr-2"></i>
                <span>${meal.strCategory}</span>
              </div>
              <img
                src="${meal.strMealThumb}"
                alt=""
                class="w-full object-cover opacity-50 hover:opacity-100 transition-opacity"
              />
              <div class="m-6 space-y-2">
                <span class="font-bold text-primary text-2xl">${meal.strMeal}</span>
                <span class="block text-lg text-gray-600 hover:text-gray-800">
                  Area ${meal.strArea}
                </span>
              </div>
          </div>
      `);

      mealsContainer.appendChild(card);
    });
  };

  fetchData();
});

function createMealCard(htmlText) {
  const template = document.createElement("template");

  template.innerHTML = htmlText.trim();

  // console.log(template.content.firstElementChild);

  return template.content.firstElementChild;
}

{
  /* <div class="card">
  <div class="card_category">
    <i class="fa-solid fa-clock text-2xl"></i>
    <span>25min</span>
  </div>
  <img
    src="images/stew.jpg"
    alt=""
    class="w-full object-cover opacity-50 hover:opacity-100 transition-opacity"
  />
  <div class="m-6">
    <span class="font-bold text-2xl">5 Bean Chilli Stew</span>
    <span class="block text-lg text-gray-600 hover:text-gray-800">
      Recipe by Mario
    </span>
  </div>
</div> */
}
