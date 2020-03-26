// global array variables 
var pokemonArray = []


function multiplePokemon(multiplePokeObject) {
    $("#searchPokemon").css("visibility", "visible");
    for (i = 0; i < multiplePokeObject.results.length; i++) {
        // for (i=0; i<15; i++){

        var pokemonURL = multiplePokeObject.results[i].url
        var orderDiv = $("<div>")
        var res = multiplePokeObject.results[i].url.split("/");
        orderDiv.attr("id", res[6])
        orderDiv.addClass("card column is-one-third")
        $("#searchPokemon").append(orderDiv)

        $.ajax({
            url: pokemonURL,
            method: "GET"
        }).then(function (individualPokemon) {
            cardCreation(individualPokemon)
        })
    }
}


function multiplePokemonType(multiplePokeObject) {
    $("#searchPokemon").css("visibility", "visible");
    for (i = 0; i < multiplePokeObject.pokemon.length; i++) {
        // for (i=0; i<15; i++){

        var pokemonURL = multiplePokeObject.pokemon[i].pokemon.url
        var newPokemonDiv = $("<div>")
        var res = multiplePokeObject.pokemon[i].pokemon.url.split("/");
        newPokemonDiv.addClass("card column is-one-third")
        newPokemonDiv.attr("id", res[6])
        newPokemonDiv.attr("data", "name")
        $("#searchPokemon").append(newPokemonDiv)

        $.ajax({
            url: pokemonURL,
            method: "GET"
        }).then(function (individualPokemon) {
            cardCreation(individualPokemon)
        })
    }
}


function cardCreation(individualPokeObject) {
    $("#searchPokemon").css("visibility", "visible");
    var spriteURL = individualPokeObject.sprites.front_default
    if (spriteURL == null) {
        spriteURL = "images/NoImageAvailable.png"
    }
    var pokeImageDiv = $("<div>")
    var pokeImage = $("<img>").attr("src", spriteURL)
    pokeImage.attr("alt", "pokemon-sprite")
    var pokeFigure = $("<figure>")
    var pokemonDexNum = individualPokeObject.id
    var targetDiv = $(`[id=${pokemonDexNum}]`)
    pokeImageDiv.addClass("card-image")
    pokeFigure.addClass("image is-128x128")
    targetDiv.append(pokeImageDiv)
    pokeImageDiv.append(pokeFigure)
    pokeFigure.append(pokeImage)

    var pokeContent = $("<div>")
    var pokeMedia = $("<div>")
    var pokeName = $("<p>")
    var pokeNameURL = individualPokeObject.name
    var pokeMediaContent = $("<div>")
    var pokeCardContent = $("<div>")
    var generation = $("<p>")
    var type = $("<p>")
    var idNumber = $("<p>")
    var type1URL = individualPokeObject.types[0].type.name
    var type2URL = individualPokeObject.types[1] ? " | " + individualPokeObject.types[1].type.name : ""
    var idURL = individualPokeObject.id

    pokeContent.addClass("card-content")
    pokeMedia.addClass("media")
    pokeImageDiv.addClass("media-left")
    pokeFigure.addClass("image is-128x128")
    pokeMediaContent.addClass("media-content")
    pokeName.addClass("title is-4 pokeName")
    pokeCardContent.addClass("subtitle is-6")

    type.html("Type: " + type1URL + "  " + type2URL)
    idNumber.html("Pok&eacute;dex Entry: " + idURL)

    if (idURL >= 1 && idURL <= 151) {
        generation.html("Generation: 1")
    } else if (idURL >= 152 && idURL <= 251) {
        generation.html("Generation: 2")
    } else if (idURL >= 252 && idURL <= 386) {
        generation.html("Generation: 3")
    } else if (idURL >= 387 && idURL <= 494) {
        generation.html("Generation: 4")
    } else if (idURL >= 495 && idURL <= 649) {
        generation.html("Generation: 5")
    } else if (idURL >= 650 && idURL <= 721) {
        generation.html("Generation: 6")
    } else if (idURL >= 722 && idURL <= 808) {
        generation.html("Generation: 7")
    }

    pokeFigure.append(pokeImage)
    pokeImageDiv.append(pokeFigure)
    pokeMedia.append(pokeImageDiv)
    pokeName.append(pokeNameURL)
    pokeMediaContent.append(pokeName)
    pokeMedia.append(pokeMediaContent)
    pokeCardContent.append(type)
    pokeCardContent.append(idNumber)
    pokeCardContent.append(generation)
    pokeMediaContent.append(pokeCardContent)
    pokeContent.prepend(pokeMedia)
    targetDiv.append(pokeContent)
}

$("#submit").click(function () {
    // empties the result box
    $("#searchPokemon").empty();

    var inputedValue = $("#userInput").val().toLowerCase()

    if (inputedValue === "all") {
        inputedValue = "pokemon?&limit=964"
    } else if (inputedValue === "bug" || inputedValue === "dark" || inputedValue === "dragon" || inputedValue === "electric" || inputedValue === "fairy" || inputedValue === "fighting" || inputedValue === "fire" || inputedValue === "flying" || inputedValue === "ghost" || inputedValue === "grass" || inputedValue === "ground" || inputedValue === "ice" || inputedValue === "normal" || inputedValue === "poison" || inputedValue === "psychic" || inputedValue === "rock" || inputedValue === "steel" || inputedValue === "water") {
        inputedValue = "type/" + inputedValue
    } else {
        inputedValue = "pokemon/" + inputedValue
    }
    var pokeapiURL = "https://pokeapi.co/api/v2/" + inputedValue

    if (inputedValue === "pokemon?&limit=964") {
        $.ajax({
            url: pokeapiURL,
            method: "GET"
        }).then(function (pokemonID) { //all
            multiplePokemon(pokemonID)
        })

        
    // this is if they chose a specific type
    } else if (inputedValue === "type/bug" || inputedValue === "type/dark" || inputedValue === "type/dragon" || inputedValue === "type/electric" || inputedValue === "type/fairy" || inputedValue === "type/fighting" || inputedValue === "type/fire" || inputedValue === "type/flying" || inputedValue === "type/ghost" || inputedValue === "type/grass" || inputedValue === "type/ground" || inputedValue === "type/ice" || inputedValue === "type/normal" || inputedValue === "type/poison" || inputedValue === "type/psychic" || inputedValue === "type/rock" || inputedValue === "type/steel" || inputedValue === "type/water") {

        // This ajax call retrieves all pokemon of a certain type
        $.ajax({
            url: pokeapiURL,
            method: "GET"
        }).then(function (typeID) { //type
            multiplePokemonType(typeID)
        })

    } else { //individual
        $.ajax({
            url: pokeapiURL,
            method: "GET"
        }).then(function (pokemonID) {
            var newPokemon = $("<div>")
            newPokemon.attr("id", pokemonID.id)
            newPokemon.addClass("card")
            $("#searchPokemon").append(newPokemon)
            cardCreation(pokemonID)
        })
    }
    $("#gif").attr("src", "")
    var gifURL = "https://api.tenor.com/v1/search?contentfilter=high&q="

    if(inputedValue === "pokemon?&limit=964"){
        gifURL = "https://api.tenor.com/v1/search?contentfilter=high&q=pokemon"
    } else {
        var gifSearch = inputedValue.split("/")
        gifURL = "https://api.tenor.com/v1/search?contentfilter=high&q=" + gifSearch[1] +"-pokemon"
    }

    $.ajax({
        url: gifURL,
        method: "GET"
    }).then(function(response){
        for (i=0; i<1;i++){
        var randomGIF = Math.floor(Math.random() * response.results.length)
        var pokemonGIF = response.results[randomGIF].media[0].tinygif.url

        $("#gif").attr("src", pokemonGIF)
        }
    })

})

$("#genSelect").change("data-option", function () {
    $("#searchPokemon").empty();
    var pokeapiURL = "https://pokeapi.co/api/v2/"

    if (this.value === "g1") {
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?limit=151"

    } else if (this.value === "g2") {
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100"

    } else if (this.value === "g3") {
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135"

    } else if (this.value === "g4") {
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=386&limit=107"

    } else if (this.value === "g5") {
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=494&limit=155"

    } else if (this.value === "g6") {
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=649&limit=72"

    } else if (this.value === "g7") {
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=721&limit=86"
    }
    $.ajax({
        url: pokeapiURL,
        method: "GET"
    }).then(function (pokemonGen) {
        multiplePokemon(pokemonGen)
    })
})

$("#typeSelect").change("data-type", function () {
    $("#searchPokemon").empty();
    var pokeapiURL = "https://pokeapi.co/api/v2/"

    if (this.value === "bug") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/bug"
    } else if (this.value === "dark") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/dark"
    } else if (this.value === "dragon") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/dragon"
    } else if (this.value === "electric") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/electric"
    } else if (this.value === "fairy") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/fairy"
    } else if (this.value === "fighting") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/fighting"
    } else if (this.value === "fire") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/fire"
    } else if (this.value === "flying") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/flying"
    } else if (this.value === "ghost") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/ghost"
    } else if (this.value === "grass") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/grass"
    } else if (this.value === "ground") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/ground"
    } else if (this.value === "ice") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/ice"
    } else if (this.value === "normal") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/normal"
    } else if (this.value === "poison") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/poison"
    } else if (this.value === "psychic") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/psychic"
    } else if (this.value === "rock") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/rock"
    } else if (this.value === "steel") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/steel"
    } else if (this.value === "water") {
        pokeapiURL = "https://pokeapi.co/api/v2/type/water"
    }
    $.ajax({
        url: pokeapiURL,
        method: "GET"
    }).then(function (typeID) {
        multiplePokemonType(typeID)
    })
})

var aliceTumbling = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0)'},
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)'}
];