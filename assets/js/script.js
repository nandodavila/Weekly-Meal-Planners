


































































































//recipes API
var APIurl='https://api.spoonacular.com/recipes/716429/information?apiKey=69ee834c34f4407190db5d6decbccd2a&includeNutrition=true'
var byRecipes = document.querySelector("#recepies")
var byDiet = document.querySelector("#diet")
var byIngredients = document.querySelector("#ingredients")
var byMealType = document.querySelector("#type")
var submitBtn = document.querySelector("#submit")

fetch(APIurl)
.then(function(response){

  return response.json()
  })
.then(function(data){
    console.log(data)
})


submitBtn.addEventListener("click", function(event){
    event.preventDefault()



console.log(byRecipes.value)
console.log(byDiet.value)
console.log(byIngredients.value)
console.log(byMealType.value)
})