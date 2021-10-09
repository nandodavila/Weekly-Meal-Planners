
// var moment = moment();
var startOfWeek = moment().startOf('week').add(1, 'weeks').add(1, 'days').format('MM-DD-YYYY');
var date1 = document.querySelector('.date1');
var date2 = document.querySelector('.date2');
var date3 = document.querySelector('.date3');
var date4 = document.querySelector('.date4');
var date5 = document.querySelector('.date5');
var allDays = [date1, date2, date3, date4, date5];



function getCalender() {
    date1.textContent = startOfWeek;
    date2.textContent = moment().startOf('week').add(1, 'weeks').add(2, 'days').format('MM-DD-YYYY');
    date3.textContent = moment().startOf('week').add(1, 'weeks').add(3, 'days').format('MM-DD-YYYY')
    date4.textContent = moment().startOf('week').add(1, 'weeks').add(4, 'days').format('MM-DD-YYYY')
    date5.textContent = moment().startOf('week').add(1, 'weeks').add(5, 'days').format('MM-DD-YYYY')

}

getCalender();


//recipes API
var byCuisine = document.querySelector("#cuisine")
var byDiet = document.querySelector("#diet")
var byIntolerances = document.querySelector("#intolerances")
var byMealType = document.querySelector("#type")
var submitBtn = document.querySelector("#submit")
var recipeEL = document.querySelector(".recipeEL")
// console.log(byCuisine.value)
// console.log(byDiet.value)
// console.log(byIntolerances.value)
// console.log(byMealType.value)






submitBtn.addEventListener("click", function(event){
    event.preventDefault()
    var APIurl='https://api.spoonacular.com/recipes/complexSearch/?apiKey=69ee834c34f4407190db5d6decbccd2a&number=100&cuisine='+byCuisine.value+'&diet='+byDiet.value+'&intolerances='+byIntolerances.value+'&type='+byMealType.value

    fetch(APIurl)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data)

        var tiles = ''
    for (var i = 0 ; i < data.results.length; i++){
        tiles += 
       '<article class="tile is-child box is-2">'+ 
       '<div class="card-image">'+
       '<figure class="image is-4by3">'+
       '<img src="'+data.results[i].image+'" alt="Placeholder image">'+
       '</figure>'+
       '</div>'+
       '<div class="card-content">'+
       '<div class="media-content">'+
       '<p class="title is-4">'+data.results[i].title+'</p>'+
       '</div>'+
       '</div>'+
       '</article>'
    }
    recipeEL.innerHTML = tiles
})
})

