const search= document.getElementById("search"),
submit = document.getElementById("submit"),
random = document.getElementById("random"),
mealEl=document.getElementById("meals"),
resultHeading=document.getElementById("result-heading"),
single_mealEl=document.getElementById("single-meal");


//SearchMealAndFetch
function searchMeal(e){
e.preventDefault();
//clear singlemeal
single_mealEl.innerHTML="";

const term = search.value;
if(term===""){
 alert("Search Something")
}else{
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          resultHeading.innerHTML=`<h2>Search Results for ${term}</h2>`

          if(data.meals===null){
            resultHeading.innerHTML=`<h1>Please Try Again</h1>`
            mealEl.innerHTML=" ";
          }else{
              mealEl.innerHTML=data.meals.map(meals=>
                `<div class="mealItem">
                 <img src="${meals.strMealThumb}"/>
                 <div class="mealName">
                    ${meals.strMeal}
                               
                 </div>
                 <div class="inst">
                 <h2>Instructions</h2>
                  ${meals.strInstructions}
                 </div>
                </div>`
                ).join('')
          }
      })
      search.value="";
    }
}
// Event listerner
submit.addEventListener('submit',searchMeal)