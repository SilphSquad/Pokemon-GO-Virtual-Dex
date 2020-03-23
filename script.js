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


$("#compareGO").click(function(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://pokemon-go1.p.rapidapi.com/released_pokemon.json",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
            "x-rapidapi-key": "295660fa97msh39e208df7e044f5p14aa64jsnb262e3e093ec"
        }
    }
    
    $.ajax(settings).done(function (response) {
        for (i=0; i< response.length; i++){
            if (response[i].id === )
        }
    });

})