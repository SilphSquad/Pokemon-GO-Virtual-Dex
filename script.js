$("#submit").click(function () {
    $("#searchPokemon").empty();
    var inputedValue = $("#userInput").val()
    // console.log(inputedValue)
    if (inputedValue === "all") {
        inputedValue = "pokemon?&limit=964"
    } else if (inputedValue === "bug" || inputedValue === "dark" || inputedValue === "dragon" || inputedValue === "electric" || inputedValue === "fairy" || inputedValue === "fighting" || inputedValue === "fire" || inputedValue === "flying" || inputedValue === "ghost" || inputedValue === "grass" || inputedValue === "ground" || inputedValue === "ice" || inputedValue === "normal" || inputedValue === "poison" || inputedValue === "psychic" || inputedValue === "rock" || inputedValue === "steel" || inputedValue === "water") {
        inputedValue = "type/" + inputedValue
    } else {
        inputedValue = "pokemon/" + inputedValue
    }
    // console.log(inputedValue)
    var pokeapiURL = "https://pokeapi.co/api/v2/" + inputedValue
    console.log(pokeapiURL)

    if (inputedValue === "pokemon?&limit=964") {

        $.ajax({
            url: pokeapiURL,
            method: "GET"
        }).then(function (pokemonID) {//all
            for (i = 0; i < pokemonID.results.length; i++) {
                var newPokemon = $("<div>")
                var pokeImage = $("<div>")
                var pokeFigure = $("<figure>")
                var imgURL = pokemonID.sprites.front_default
                var image = $("<img>").attr("src", imgURL)
                pokeImage.addClass("card-image")
                pokeFigure.addClass("image is-128x128")
                newPokemon.addClass("card")
                // newPokemon.text(pokemonID.results[i].name)
                newPokemon.append(pokeImage)
                pokeImage.append(pokeFigure)
                pokeFigure.append(image)
                $("#searchPokemon").append(newPokemon)

            }
        })

    } else if (inputedValue === "type/bug" || inputedValue === "type/dark" || inputedValue === "type/dragon" || inputedValue === "type/electric" || inputedValue === "type/fairy" || inputedValue === "type/fighting" || inputedValue === "type/fire" || inputedValue === "type/flying" || inputedValue === "type/ghost" || inputedValue === "type/grass" || inputedValue === "type/ground" || inputedValue === "type/ice" || inputedValue === "type/normal" || inputedValue === "type/poison" || inputedValue === "type/psychic" || inputedValue === "type/rock" || inputedValue === "type/steel" || inputedValue === "type/water") {
        $.ajax({
            url: pokeapiURL,
            method: "GET"
        }).then(function (pokemonID) {//type
            for (i = 0; i < pokemonID.pokemon.length; i++) {
                var newPokemon = $("<div>")
                var pokeImage = $("<div>")
                var pokeFigure = $("<figure>")
                var imgURL = pokemonID.sprites.front_default
                var image = $("<img>").attr("src", imgURL)
                newPokemon.addClass("card")
                pokeImage.addClass("card-image")
                pokeFigure.addClass("image is-128x128")
                // console.log(response)
                // newPokemon.text(pokemonID.pokemon[i].pokemon.name)
                newPokemon.append(pokeImage)
                pokeImage.append(pokeFigure)
                pokeFigure.append(image)
                $("#searchPokemon").append(newPokemon)
            }
        })
    } else {//individual
        $.ajax({
            url: pokeapiURL,
            method: "GET"
        }).then(function (pokemonID) {
            var newPokemon = $("<div>")
            var pokeImage = $("<div>")
            var pokeContent = $("<div>")
            var pokeMedia = $("<div>")
            var pokeFigure = $("<figure>")
            var imgURL = pokemonID.sprites.front_default
            var image = $("<img>").attr("src", imgURL)
            var pokeName = $("<p>")
            var pokeNameURL = pokemonID.name
            var pokeMediaContent = $("<div>")
            var pokeCardContent = $("<div>")
            var generation = $("<p>")
            var type = $("<p>")
            var idNumber = $("<p>")
            var type1URL = pokemonID.types[0].type.name
            var type2URL = pokemonID.types[1].type.name
            var idURL = pokemonID.id

            newPokemon.addClass("card")
            pokeContent.addClass("card-content")
            pokeMedia.addClass("media")
            pokeImage.addClass("media-left")
            pokeFigure.addClass("image is-128x128")
            pokeMediaContent.addClass("media-content")
            pokeName.addClass("title is-4")
            pokeCardContent.addClass("subtitle is-6")

            type.html("Type: " + type1URL + " " + type2URL)
            idNumber.html("Pok&eacute;dex Entry: " + idURL)

            if (idURL >= 1 && idURL <= 151){
                generation.html("Generation: 1")
            }else if (idURL >= 152 && idURL <= 251){
                generation.html("Generation: 2")
            }else if (idURL >= 252 && idURL <= 386){
                generation.html("Generation: 3")
            }else if (idURL >= 387 && idURL <= 494){
                generation.html("Generation: 4")
            }else if (idURL >= 495 && idURL <= 649){
                generation.html("Generation: 5")
            }else if (idURL >= 650 && idURL <= 721){
                generation.html("Generation: 6")
            }else if (idURL >= 722 && idURL <= 808){
                generation.html("Generation: 7")
            }


            pokeFigure.append(image)
            pokeImage.append(pokeFigure)
            pokeMedia.append(pokeImage)
            pokeName.append(pokeNameURL)
            pokeMediaContent.append(pokeName)
            pokeMedia.append(pokeMediaContent)
            pokeCardContent.append(type)
            pokeCardContent.append(idNumber)
            pokeCardContent.append(generation)
            pokeMediaContent.append(pokeCardContent)
            pokeContent.prepend(pokeMedia)
            newPokemon.append(pokeContent)
            $("#searchPokemon").append(newPokemon)

        })
    }


})


// $("#compareGO").click(function(){
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

//     $.ajax(settings).done(function (response) {
//         for (i=0; i< response.length; i++){
//             if (response[i].id === )
//         }
//     });

// })