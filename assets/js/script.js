
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
var submitBtn = document.querySelector("#submitmeal") // Form submit 
var recipeEL = document.querySelector(".recipeEL") // Recipe Div
var recipeMDL = document.querySelector("#recipeMDL") // Recipe Modal Pop-up
var closeBTN = document.querySelector(".delete") // Button to close modal
var ingredientsLi = document.querySelector("#ingredientsLi")
var recipeLi = document.querySelector("#recipeLi")
var recipeTitle = document.querySelector("#recipeTitle")
var dishimg = document.querySelector(".dishimg")
 






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

    var APIurl2= "https://api.spoonacular.com/recipes/"+ event.target.id +"/information?apiKey=69ee834c34f4407190db5d6decbccd2a"
    console.log(APIurl2)
    fetch(APIurl2)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data)
        recipeTitle.textContent = data.title
        recipeLi.innerHTML = data.instructions
        dishimg.src = data.image

        var ingrdlist = ''
        for (var i = 0; i < data.extendedIngredients.length; i++ ){
            ingrdlist += '<li>' + data.extendedIngredients[i].name + '</li>'
            console.log('hi')
        }
        ingredientsLi.innerHTML = ingrdlist

        

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
    console.log(event)
    console.log(event.path[0].id)
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById(data).setAttribute('style', "width: auto;")
    
    console.log(event.target)
    console.log(data)
    function setLocalInput() {
        localStorage.setItem(event.path[0].id, data)
    } 
    setLocalInput();
    
    
  } 

var local1 = document.querySelector("#local1")
var local2 = document.querySelector("#local2")
var local3 = document.querySelector("#local3")
var local4 = document.querySelector("#local4")
var local5 = document.querySelector("#local5")


window.onload = function(){
    var localid1 = localStorage.getItem("local1")
    if (localid1){
    var apiurlid1 = "https://api.spoonacular.com/recipes/"+ localid1 +"/information?apiKey=69ee834c34f4407190db5d6decbccd2a"
    fetch(apiurlid1)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data)
        local1.innerHTML = '<article id="' +localid1 +'"class="tile is-child box is-2" draggable="true" ondragstart="drag(event)" style="width:auto;" >'+ 
    '<div id="' +localid1 +'"class="card-image">'+
    '<figure id="' +localid1 +'" class="image is-4by3">'+
    '<img id="' +localid1 +'" src="'+ data.image+'" alt="Placeholder image">'+
    '</figure>'+
    '</div>'+
    '<div id="' +localid1 +'" class="card-content">'+
    '<div id="' +localid1 +'" class="media-content">'+
    '<p id="' +localid1 +'" class="title is-4">'+data.title+'</p>'+
    '</div>'+
    '</div>'+
    '</article>'
    })
}

    var localid2 = localStorage.getItem("local2")
    if (localid2){
    var apiurlid2 = "https://api.spoonacular.com/recipes/"+ localid2 +"/information?apiKey=69ee834c34f4407190db5d6decbccd2a"
    fetch(apiurlid2)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data)
        local2.innerHTML = '<article id="' +localid2 +'"class="tile is-child box is-2" draggable="true" ondragstart="drag(event)" style="width:auto;" >'+ 
    '<div id="' +localid2 +'"class="card-image">'+
    '<figure id="' +localid2 +'" class="image is-4by3">'+
    '<img id="' +localid2 +'" src="'+ data.image+'" alt="Placeholder image">'+
    '</figure>'+
    '</div>'+
    '<div id="' +localid2 +'" class="card-content">'+
    '<div id="' +localid2 +'" class="media-content">'+
    '<p id="' +localid2 +'" class="title is-4">'+data.title+'</p>'+
    '</div>'+
    '</div>'+
    '</article>'
    })
}


    var localid3 = localStorage.getItem("local3")
    if (localid3){
    var apiurlid3 = "https://api.spoonacular.com/recipes/"+ localid3 +"/information?apiKey=69ee834c34f4407190db5d6decbccd2a"
    fetch(apiurlid3)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data)
        local3.innerHTML = '<article id="' +localid3 +'"class="tile is-child box is-2" draggable="true" ondragstart="drag(event)" style="width:auto;" >'+ 
    '<div id="' +localid3 +'"class="card-image">'+
    '<figure id="' +localid3 +'" class="image is-4by3">'+
    '<img id="' +localid3 +'" src="'+ data.image+'" alt="Placeholder image">'+
    '</figure>'+
    '</div>'+
    '<div id="' +localid3 +'" class="card-content">'+
    '<div id="' +localid3 +'" class="media-content">'+
    '<p id="' +localid3 +'" class="title is-4">'+data.title+'</p>'+
    '</div>'+
    '</div>'+
    '</article>'
    })
}

    var localid4 = localStorage.getItem("local4")
    if (localid4){
    var apiurlid4 = "https://api.spoonacular.com/recipes/"+ localid4 +"/information?apiKey=69ee834c34f4407190db5d6decbccd2a"
    fetch(apiurlid4)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data)
        local4.innerHTML = '<article id="' +localid4 +'"class="tile is-child box is-2" draggable="true" ondragstart="drag(event)" style="width:auto;" >'+ 
    '<div id="' +localid4 +'"class="card-image">'+
    '<figure id="' +localid4 +'" class="image is-4by3">'+
    '<img id="' +localid4 +'" src="'+ data.image+'" alt="Placeholder image">'+
    '</figure>'+
    '</div>'+
    '<div id="' +localid4 +'" class="card-content">'+
    '<div id="' +localid4 +'" class="media-content">'+
    '<p id="' +localid4 +'" class="title is-4">'+data.title+'</p>'+
    '</div>'+
    '</div>'+
    '</article>'
    })
}

    var localid5 = localStorage.getItem("local5")
    if (localid5) {
    var apiurlid5 = "https://api.spoonacular.com/recipes/"+ localid5 +"/information?apiKey=69ee834c34f4407190db5d6decbccd2a"
    fetch(apiurlid5)
    .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data)
        local5.innerHTML = '<article id="' +localid5 +'"class="tile is-child box is-2" draggable="true" ondragstart="drag(event)" style="width:auto;" >'+ 
    '<div id="' +localid5 +'"class="card-image">'+
    '<figure id="' +localid5 +'" class="image is-4by3">'+
    '<img id="' +localid5 +'" src="'+ data.image+'" alt="Placeholder image">'+
    '</figure>'+
    '</div>'+
    '<div id="' +localid5 +'" class="card-content">'+
    '<div id="' +localid5 +'" class="media-content">'+
    '<p id="' +localid5 +'" class="title is-4">'+data.title+'</p>'+
    '</div>'+
    '</div>'+
    '</article>'
    })
}

}
