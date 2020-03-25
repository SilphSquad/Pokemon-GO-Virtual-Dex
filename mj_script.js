var pokemonArray = []


$("#submit").click(function(){
$("#searchPokemon").empty();
var inputedValue = $("#userInput").val()
console.log(inputedValue)
if (inputedValue === "all"){
    inputedValue = "pokemon?&limit=964"
}
else if(inputedValue === "bug" || inputedValue === "dark" || inputedValue === "dragon" || inputedValue === "electric" ||inputedValue === "fairy" || inputedValue === "fighting" || inputedValue === "fire" || inputedValue === "flying" || inputedValue === "ghost" || inputedValue === "grass" || inputedValue === "ground" || inputedValue === "ice" || inputedValue === "normal" || inputedValue === "poison" || inputedValue === "psychic" || inputedValue === "rock" ||inputedValue === "steel" ||inputedValue === "water"){
    inputedValue = "type/" + inputedValue
} 
else{
    inputedValue = "pokemon/" + inputedValue
}
console.log(inputedValue)
var pokeapiURL = "https://pokeapi.co/api/v2/" + inputedValue
console.log(pokeapiURL)

if(inputedValue === "pokemon?&limit=964"){

    $.ajax({
        url: pokeapiURL,
        method: "GET"
    }).then(function(pokemonID){
        for (i = 0; i < pokemonID.results.length;i++){
            var newPokemon = $("<p>")
            
            var res = pokemonID.results[i].url.split("/");
            newPokemon.attr("id", res[6])
            newPokemon.attr("data","name")
            newPokemon.text(pokemonID.results[i].name)
            pokemonArray.push(newPokemon)
            $("#searchPokemon").append(newPokemon)
            
        }
    })

}else if(inputedValue === "type/bug" || inputedValue === "type/dark" || inputedValue === "type/dragon" || inputedValue === "type/electric" ||inputedValue === "type/fairy" || inputedValue === "type/fighting" || inputedValue === "type/fire" || inputedValue === "type/flying" || inputedValue === "type/ghost" || inputedValue === "type/grass" || inputedValue === "type/ground" || inputedValue === "type/ice" || inputedValue === "type/normal" || inputedValue === "type/poison" || inputedValue === "type/psychic" || inputedValue === "type/rock" ||inputedValue === "type/steel" ||inputedValue === "type/water"){
    $.ajax({
        url: pokeapiURL,
        method: "GET"
    }).then(function(pokemonID){
        for (i=0; i<pokemonID.pokemon.length;i++){
        var newPokemon = $("<p>")
        
        var res = pokemonID.pokemon[i].url.split("/");
        newPokemon.attr("id", res[6])
        newPokemon.attr("data","name")
        pokemonArray.push(newPokemon)
        newPokemon.text(pokemonID.pokemon[i].pokemon.name)
        $("#searchPokemon").append(newPokemon)
        }
    })
} 

else {
    $.ajax({
        url: pokeapiURL,
        method: "GET"
    }).then(function(pokemonID){

        var newPokemon = $("<p>")
        
        newPokemon.attr("id", pokemonID.id)
        newPokemon.attr("data","name")
        newPokemon.text(pokemonID.name)
        pokemonArray.push(newPokemon)
        $("#searchPokemon").append(newPokemon)

    })
}


})

console.log(pokemonArray)

// $("#compareGO").click("data-name", function(){
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://pokemon-go1.p.rapidapi.com/released_pokemon.json",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
//             "x-rapidapi-key": "295660fa97msh39e208df7e044f5p14aa64jsnb262e3e093ec"
//         }
//     }
    
//     // $.ajax(settings).done(function (response) {
//     //     for (i=0; i< response.length; i++){
//     //         var goId = response[i].id
//     //         var pokeID = pokemonArray[i].id

//     //     }
//     // })
    
//     $.ajax({
//         url: settings.url,
//         method: "GET"
//     }).then(function(pokemongoID){

//         console.clear();

//         // var newPokemon = $("<p>")
        
//         // newPokemon.attr("id", pokemonID.id)
//         // newPokemon.attr("data","name")
//         // newPokemon.text(pokemonID.name)
//         // pokemonArray.push(newPokemon)
//         // $("#searchPokemon").append(newPokemon)

//         console.log(pokemongoID);

//     })


// })

$("#go").click(function(){
// $("#searchPokemon").empty();
console.clear();

// var unirest = require("unirest");

// var req = unirest("GET", "https://pokemon-go1.p.rapidapi.com/released_pokemon.json");

// req.headers({
// 	"x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
// 	"x-rapidapi-key": "3e85271df6mshffb2557ab433d94p19f131jsne75ebcb10a2a"
// });


$.ajax({
    url: "https://pokemon-go1.p.rapidapi.com/released_pokemon.json",
    method: "GET",
    xrapidapikey: "3e85271df6mshffb2557ab433d94p19f131jsne75ebcb10a2a"
}).then(function(pokemongoID){
    // for (i = 0; i < pokemonID.results.length;i++){
    //     var newPokemon = $("<p>")
        
    //     var res = pokemonID.results[i].url.split("/");
    //     newPokemon.attr("id", res[6])
    //     newPokemon.attr("data","name")
    //     newPokemon.text(pokemonID.results[i].name)
    //     pokemonArray.push(newPokemon)
    //     $("#searchPokemon").append(newPokemon)
        
    // }

    req.end(function (res) {
        if (res.error) throw new Error(res.error);
    
        console.log(res.body);
    });

    // console.log(pokemongoID);
})
    
    
    })