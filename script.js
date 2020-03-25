// global array variables 
var pokemonArray = []
var goArray = []
// when the search button is pressed
$("#submit").click(function () {
    // empties the result box
    $("#searchPokemon").empty();
    // makes a variable equal to what was typed
    var inputedValue = $("#userInput").val()
    // depending on what they type the url will change
    if (inputedValue === "all") {
        inputedValue = "pokemon?&limit=964"
    } else if (inputedValue === "bug" || inputedValue === "dark" || inputedValue === "dragon" || inputedValue === "electric" || inputedValue === "fairy" || inputedValue === "fighting" || inputedValue === "fire" || inputedValue === "flying" || inputedValue === "ghost" || inputedValue === "grass" || inputedValue === "ground" || inputedValue === "ice" || inputedValue === "normal" || inputedValue === "poison" || inputedValue === "psychic" || inputedValue === "rock" || inputedValue === "steel" || inputedValue === "water") {
        inputedValue = "type/" + inputedValue
    } else {
        inputedValue = "pokemon/" + inputedValue
    }
    // the change to the url
    var pokeapiURL = "https://pokeapi.co/api/v2/" + inputedValue
    
    // this is if they chose to search all the pokemon
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
            orderDiv.attr("id", pokemonID.results[i].id)
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
                pokemonArray.push(newPokemonDiv)
                targetDiv.append(newPokemonDiv)
                })
            }
        })
    // this is if they chose a specific type
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
                pokemonArray.push(newPokemonDiv)
                $("#searchPokemon").append(newPokemonDiv)
                // targetDiv.append(newPokemonDiv)
                })
            }
        })
    // this is for a specific pokemon
    } else {
        $.ajax({
            url: pokeapiURL,
            method: "GET"
        }).then(function (pokemonID) {
            var newPokemon = $("<div>")
            var pokeImage = $("<div>")
            var pokeFigure = $("<figure>")
            var imgURL = pokemonID.sprites.front_default
            var image = $("<img>").attr("src", imgURL)
            var res = pokemonID.results[i].url.split("/");
            newPokemon.attr("id", res[6])
            newPokemon.addClass("card")
            pokeImage.addClass("card-image")
            pokeFigure.addClass("image is-128x128")
            newPokemon.text(pokemonID.name)
            newPokemon.append(pokeImage)
            pokeImage.append(pokeFigure)
            pokeFigure.append(image)
            pokemonArray.push(newPokemon)
            $("#searchPokemon").append(newPokemon)
        })
    }
})

// this is for the generations drop down menu
$("#genSelect").change("data-option", function(){
    $("#searchPokemon").empty();
    var pokeapiURL = "https://pokeapi.co/api/v2/"

    if (this.value === "g1"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?limit=151"
    }else if (this.value === "g2"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100"
    }else if (this.value === "g3"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135"
    }else if (this.value === "g4"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=386&limit=107"
    }else if (this.value === "g5"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=494&limit=155"
    }else if (this.value === "g6"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=649&limit=72"
    }else if (this.value === "g7"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=721&limit=86"
    }
    $.ajax({
        url: pokeapiURL,
        method: "GET"
    }).then(function(pokemonID){
        for (i=0; i<pokemonID.results.length;i++){
        var newPokemon = $("<p>")
        
        var res = pokemonID.results[i].url.split("/");
        newPokemon.attr("id", res[6])
        newPokemon.attr("data","name")
        pokemonArray.push(newPokemon)
        newPokemon.text(pokemonID.results[i].name)
        $("#searchPokemon").append(newPokemon)
        }
    })
})
// this is for the type drop down menu
$("#typeSelect").change("data-type", function(){
    $("#searchPokemon").empty();
    var pokeapiURL = "https://pokeapi.co/api/v2/"

    if(this.value === "bug"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/bug"
    }else if(this.value === "dark"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/dark"
    }else if(this.value === "dragon"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/dragon"
    }else if(this.value === "electric"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/electric"
    }else if(this.value === "fairy"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/fairy"
    }else if(this.value === "fighting"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/fighting"
    }else if(this.value === "fire"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/fire"
    }else if(this.value === "flying"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/flying"
    }else if(this.value === "ghost"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/ghost"
    }else if(this.value === "grass"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/grass"
    }else if(this.value === "ground"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/ground"
    }else if(this.value === "ice"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/ice"
    }else if(this.value === "normal"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/normal"
    }else if(this.value === "poison"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/poison"
    }else if(this.value === "psychic"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/psychic"
    }else if(this.value === "rock"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/rock"
    }else if(this.value === "steel"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/steel"
    }else if(this.value === "water"){
        pokeapiURL = "https://pokeapi.co/api/v2/type/water"
    }
    $.ajax({
        url: pokeapiURL,
        method: "GET"
    }).then(function(pokemonID){
        for (i=0; i<pokemonID.pokemon.length;i++){
        var newPokemon = $("<p>")
        
        var res = pokemonID.pokemon[i].pokemon.url.split("/");
        newPokemon.attr("id", res[6])
        newPokemon.attr("data","name")
        pokemonArray.push(newPokemon)
        newPokemon.text(pokemonID.pokemon[i].pokemon.name)
        $("#searchPokemon").append(newPokemon)
        }
    })
})

// the comparison go button
$("#compareGO").click("data-name", function(){
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
        
        $("#searchPokemon").empty()
        for(var index in response){
            goArray.push(response[index])
        }
        console.log(goArray)
        // console.log(pokemonArray)

        // for (i=0; i< goArray.length; i++){
        //     var goID = goArray[i].id
        //     var pokeID = parseInt($(pokemonArray[i]).attr("id"))
        //     console.log(goArray[i].id)
        //     console.log(parseInt($(pokemonArray[i]).attr("id")))

        // }

    });

})
