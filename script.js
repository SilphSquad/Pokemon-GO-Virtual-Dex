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
    // console.log(pokeapiURL)

    if (inputedValue === "pokemon?&limit=964") {
        $.ajax({
            url: pokeapiURL,
            method: "GET"
        }).then(function (pokemonID) {//all
            for (i=0; i<pokemonID.results.length; i++){
            // for (i=0; i<25; i++){
            var pokemonURL = pokemonID.results[i].url
            var orderDiv = $("<div>")
            orderDiv.attr("value", (i+1))
            $("#searchPokemon").append(orderDiv)

            $.ajax({
                url: pokemonURL,
                method: "GET"
            }).then(function(individualPokemon){
                var spriteURL = individualPokemon.sprites.front_default
                var newPokemonDiv = $("<div>")
                var pokeImageDiv = $("<div>")
                var pokeImage = $("<img>").attr("src", spriteURL)
                var pokeFigure = $("<figure>")
                var pokemonDexNum = individualPokemon.id
                var targetDiv = $(`[value=${pokemonDexNum}]`)
                pokeImageDiv.addClass("card-image")
                pokeFigure.addClass("image is-128x128")
                newPokemonDiv.addClass("card")
                newPokemonDiv.attr("data-dex-num", pokemonDexNum)
                newPokemonDiv.text(individualPokemon.name)
                newPokemonDiv.append(pokeImageDiv)
                pokeImageDiv.append(pokeFigure)
                pokeFigure.append(pokeImage)
                targetDiv.append(newPokemonDiv)
                })
            }
        })

    } else if (inputedValue === "type/bug" || inputedValue === "type/dark" || inputedValue === "type/dragon" || inputedValue === "type/electric" || inputedValue === "type/fairy" || inputedValue === "type/fighting" || inputedValue === "type/fire" || inputedValue === "type/flying" || inputedValue === "type/ghost" || inputedValue === "type/grass" || inputedValue === "type/ground" || inputedValue === "type/ice" || inputedValue === "type/normal" || inputedValue === "type/poison" || inputedValue === "type/psychic" || inputedValue === "type/rock" || inputedValue === "type/steel" || inputedValue === "type/water") {

        $.ajax({
            url: pokeapiURL,
            method: "GET"
        }).then(function (typeID) {//type
            for (i=0; i<typeID.pokemon.length; i++){
            // for (i=0; i<10; i++){
            var pokemonURL = typeID.pokemon[i].pokemon.url
            // var orderDiv = $("<div>")
            // orderDiv.attr("value", (i+1))
            // $("#searchPokemon").append(orderDiv)

            $.ajax({
                url: pokemonURL,
                method: "GET"
            }).then(function(individualPokemon){
                var spriteURL = individualPokemon.sprites.front_default
                var newPokemonDiv = $("<div>")
                var pokeImageDiv = $("<div>")
                var pokeImage = $("<img>").attr("src", spriteURL)
                var pokeFigure = $("<figure>")
                var pokemonDexNum = individualPokemon.id
                // var targetDiv = $(`[value=${pokemonDexNum}]`)
                pokeImageDiv.addClass("card-image")
                pokeFigure.addClass("image is-128x128")
                newPokemonDiv.addClass("card")
                newPokemonDiv.attr("data-dex-num", pokemonDexNum)
                newPokemonDiv.text(individualPokemon.name)
                newPokemonDiv.append(pokeImageDiv)
                pokeImageDiv.append(pokeFigure)
                pokeFigure.append(pokeImage)
                $("#searchPokemon").append(newPokemonDiv)
                // targetDiv.append(newPokemonDiv)
                })
            }
        })

    } else {//individual
        $.ajax({
            url: pokeapiURL,
            method: "GET"
        }).then(function (pokemonID) {
            var newPokemon = $("<div>")
            var pokeImage = $("<div>")
            var pokeFigure = $("<figure>")
            var imgURL = pokemonID.sprites.front_default
            var image = $("<img>").attr("src", imgURL)
            newPokemon.addClass("card")
            pokeImage.addClass("card-image")
            pokeFigure.addClass("image is-128x128")
            newPokemon.text(pokemonID.name)
            newPokemon.append(pokeImage)
            pokeImage.append(pokeFigure)
            pokeFigure.append(image)
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
