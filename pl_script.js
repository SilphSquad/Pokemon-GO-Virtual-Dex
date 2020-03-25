var pokemonArray = []
// added a bool variable to determine if character is in PokemonGo universe, set to false
var pokeGo = false;


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
$("#genSelect").change("data-option", function(){
    $("#searchPokemon").empty();
    var pokeapiURL = "https://pokeapi.co/api/v2/"

    if (this.value === "g1"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?limit=151"
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
    }else if (this.value === "g2"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=100"
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
    }else if (this.value === "g3"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=251&limit=135"
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
    }else if (this.value === "g4"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=386&limit=107"
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
    }else if (this.value === "g5"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=494&limit=155"
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
    }else if (this.value === "g6"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=649&limit=72"
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
    }else if (this.value === "g7"){
        pokeapiURL = "https://pokeapi.co/api/v2/pokemon?offset=721&limit=86"
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
    }
})

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


$("#go").click("data-name", function(){
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
        var goArray = []
        // $("#searchPokemon").empty()
        for(var index in response){
            goArray.push(response[index])
        }
        console.log(goArray)
        console.log(pokemonArray)

        goArray.push(response[index])

        for (i=0; i< goArray.length; i++){
            var goID = goArray[i].id

            var goName = goArray[i].name


            // test code

            console.log(goArray[i].id)

            var res = goName.toLowerCase();

            console.log(goName);
            console.log(res);
            // console.log(goArray[i].name)
            

            var pokeID = parseInt($(pokemonArray[i]).attr("id"))
            //test code
            console.log(parseInt($(pokemonArray[i]).attr("id")))

            

            

            var pokeName = ((pokemonArray[i]["0"].innerText));

            // console.log((pokemonArray[i]["0"].innerText));
            console.log(pokeName);

            // arrays are built, go through each member of pokemonArray and check ID against goArray ID

            // if(goID === pokeID){
            //     //test code
            //     console.log("match");
            //     // pokeGo = true;

            // } else {
            //     //test code
            //     console.log("NO");
            // }

            // console.log(pokeGo);

            
        }

        for (let i = 0; i < pokemonArray.length; i++) {                         // looping over pokemonArray
            for (let j = 0; j < goArray.length; j++) {
                if (pokemonArray[i].id == goArray[j]){
                    pokeGo = true;
                    console.log("MATCH");
                    break;
                } 
                else {
                    console.log("negative");
                }
            }
           
            
        }

    });

})