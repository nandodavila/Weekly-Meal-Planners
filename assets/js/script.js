
// var moment = moment();
var startOfWeek = moment().startOf('week').add(1, 'weeks').add(1, 'days').format('MM-DD-YYYY');
var date1 = document.querySelector('.date1');
var date2 = document.querySelector('.date2');
var date3 = document.querySelector('.date3');
var date4 = document.querySelector('.date4');
var date5 = document.querySelector('.date5');
var allDays = [date1, date2, date3, date4, date5];


console.log(moment)
console.log(startOfWeek)

function getCalender() {
    date1.textContent = startOfWeek;
    date2.textContent = moment().startOf('week').add(1, 'weeks').add(2, 'days').format('MM-DD-YYYY');
    date3.textContent = moment().startOf('week').add(1, 'weeks').add(3, 'days').format('MM-DD-YYYY')
    date4.textContent = moment().startOf('week').add(1, 'weeks').add(4, 'days').format('MM-DD-YYYY')
    date5.textContent = moment().startOf('week').add(1, 'weeks').add(5, 'days').format('MM-DD-YYYY')

}

getCalender();
































































































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

