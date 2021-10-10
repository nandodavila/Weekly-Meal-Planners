
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
var byCuisine = document.querySelector("#cuisine") //Cuisine drop-down
var byDiet = document.querySelector("#diet") //Diet drop-down
var byIntolerances = document.querySelector("#intolerances") //Intolerances drop-down
var byMealType = document.querySelector("#type") //Meal Type drop-down
var submitBtn = document.querySelector("#submit") // Form submit 
var recipeEL = document.querySelector(".recipeEL") // Recipe Div
var recipeMDL = document.querySelector("#recipeMDL") // Recipe Modal Pop-up
var closeBTN = document.querySelector(".delete") // Button to close modal
var ingredientsLi = document.querySelector("#ingredientsLi")
var recipeLi = document.querySelector("#recipeLi")
var recipeTitle = document.querySelector("#recipeTitle")
var dishimg = document.querySelector(".dishimg")






submitBtn.addEventListener("click", function(event){
    event.preventDefault()
    var APIurl='https://api.spoonacular.com/recipes/complexSearch/?apiKey=cdc2ae3f3ea444328816d92ae11c6634&number=100&cuisine='+byCuisine.value+'&diet='+byDiet.value+'&intolerances='+byIntolerances.value+'&type='+byMealType.value

    fetch(APIurl)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data)

        var tiles = ''
    for (var i = 0 ; i < data.results.length; i++){
        tiles += 
       '<article id="' +data.results[i].id +'"class="tile is-child box is-2" draggable="true" ondragstart="drag(event)">'+ 
       '<div id="' +data.results[i].id +'"class="card-image">'+
       '<figure id="' +data.results[i].id +'" class="image is-4by3">'+
       '<img id="' +data.results[i].id +'" src="'+data.results[i].image+'" alt="Placeholder image">'+
       '</figure>'+
       '</div>'+
       '<div id="' +data.results[i].id +'" class="card-content">'+
       '<div id="' +data.results[i].id +'" class="media-content">'+
       '<p id="' +data.results[i].id +'" class="title is-4">'+data.results[i].title+'</p>'+
       '</div>'+
       '</div>'+
       '</article>'
    }
    recipeEL.innerHTML = tiles
})
})

recipeEL.addEventListener("click", function(event){
    console.log(event.target.id)
    recipeMDL.classList.add("is-active")

    var APIurl2= "https://api.spoonacular.com/recipes/"+ event.target.id +"/information?apiKey=cdc2ae3f3ea444328816d92ae11c6634"
    console.log(APIurl2)
    fetch(APIurl2)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data)
        recipeTitle.textContent = data.title
        recipeLi.textContent = data.instructions
        dishimg.src = data.image

        // var ingrdlist = ''
        // for (var i = 0; i < data.extendedIngredientslength; i++ ){
        //     ingrdlist += '<li>' + data.extendedIngredients[i].name + '</li>'
        //     console.log('hi')
        // }
        // ingredientsLi.innerHTML = ingrdlist

        

    })

})

closeBTN.addEventListener("click", function(){
    recipeMDL.classList.remove("is-active")
})
































































































































































































var mainHeader = document.querySelector('.mainHeader')
function loadRandomFood() {
    var apiURL3 = "https://foodish-api.herokuapp.com/api/"
    fetch(apiURL3)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        mainHeader.setAttribute('style', "background-image: url(" + data.image + "); background-position: center")
       
    })
}

loadRandomFood();

function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById(data).setAttribute('style', "width: auto;")
  }
