$("#submit").click(function(){
var inputedValue = $("#userInput").val()

if (inputedValue === "all"){
    inputedValue = "?&limit=964"
} else {
    inputedValue = "/" + inputedValue
}
var pokeapiURL = "https://pokeapi.co/api/v2/pokemon" + inputedValue

if(inputedValue === "?&limit=964"){

    $.ajax({
        url: pokeapiURL,
        method: "GET"
    }).then(function(pokemonID){
        for (i = 0; i < pokemonID.results.length;i++){
            var newPokemon = $("<li>")
            newPokemon.text(pokemonID.results[i].name)
            $("#searchPokemon").append(newPokemon)
        }
    })
    
} else {
    $.ajax({
        url: pokeapiURL,
        method: "GET"
    }).then(function(pokemonID){
        var newPokemon = $("<li>")
        newPokemon.text(pokemonID.name)
        $("#searchPokemon").append(newPokemon)

    })
}


})