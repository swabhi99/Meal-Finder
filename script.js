

const form = document.querySelector('.form')
const input = document.querySelector('.input')
const mealContainer = document.querySelector('.meal')

const searchMeal = async (e)=>{
  e.preventDefault()
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
  const data = await response.json();
  console.log(data.meals)
  mealContainer.innerHTML=data.meals.map(meal=>
    `<div class="card shadow-xl bg-base-100 row-auto">
    <figure class="w-25 h-50"><img src=${meal.strMealThumb} alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${meal.strMeal}</h2>
      <p>${meal.strInstructions}</p>
      
    </div>
  </div>`
  ).join('');
}

form.addEventListener('submit',searchMeal)

module.exports = {
  //...
  daisyui: {
    themes: false,
  }
}
