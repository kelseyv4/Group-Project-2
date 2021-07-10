
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

var poke_names = []
var poke_hp = []
var poke_attack = []
var poke_defense = []
var poke_sp_attack = []
var poke_sp_defense = []
var poke_speed = []

function init(){
    d3.json("/api/notes/postgres").then(data => {
        var poke_data = data
        

   // for (let i = 0, len = poke_data.length; i < len; i++)
       
       // var sortedByName = poke_data, sort ((a, b) => {
        //    return a.name - })



   
        

    

  


    
    
   


    
    for (let i = 0; i < poke_data.length; i++) {
        poke_names[i] = poke_data[i].name
        poke_hp[i] = poke_data[i].hp
        poke_attack[i] = poke_data[i].attack
        poke_defense[i] = poke_data[i].defense
        poke_sp_attack[i] = poke_data[i].sp_attack
        poke_sp_defense[i] = poke_data[i].sp_defense
        poke_speed[i] = poke_data[i].speed


    };
    


    var select = document.getElementById("selectNumber"); 
    for (let i = 0; i < poke_names.length; i++) {
        var opt = poke_names[i]
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.add(el);




    };
    var select = document.getElementById("selectPoke"); 
    for (let i = 0; i < poke_names.length; i++) {
        var opt = poke_names[i]
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.add(el);

      

    };
})}


init()




// range poke_data[0, 801]



















/* 
 
 * Returns an array of values
*@param {array} rows
 * @param {integer} index
 * index 18 - attack
 * index 22 - defense
 * index 26 - HP
 * index 28 - name
 * index 24 - SP Attack 
 * index 25 - SP Defense
 * Index 26 - Speed
 */
   
    

/// create two dropdowns that populate with the names of each pokemon
/// user selects two pokemon, saves into pokemonone and two
/// those two pokemon fill into the graph
/// pokemonOne and pokemonTwo







/* 

    function unpack(rows, index) {
        return rows.map(function(row) { return row[key]; });
    }
 

 function unpack(rows, index) {
        return rows.map(function(row) {
          return row[index];
        });  
      

function buildPlot(){
    d3.json("https://pokedreamteam.herokuapp.com/api/notes/postgres").then(data => {
        var poke_data = data
        console.log(poke_data)
        var name = poke_data.pokemon.name;
        console.log(name)
    
})} */

/* buildPlot(); */

       // updateChart(poke_data)

       // eventHandler()

   /*  })
    } */
      
   /*  var all_poke_data = unpack(rows, 28),
        allHP = unpack(rows, 26),
        allAttack = unpack(rows, 18),
        allDefense = unpack(rows, 22),
        allSP_attack = unpack(rows, 24),
        allSP_defense = unpack(rows, 25),
        allSpeed = unpack(rows, 26),
        listofPokemon = [],
        currentPokemon,
        currentHP = [],
        currentAttack = []
        currentDefense = [],
        currentSP_attack = [],
        currentSP_defense = [],
        currentSpeed = [];
    
    for (var i = 0; i < all_poke_data.length; i++ ){
        if (listofPokemon.indexOf(all_poke_data[i]) === -1 ){
            listofPokemon.push(all_poke_data[i]);
        }
    }

    function getPokeData(chosenPokemon) {
        currentHP = [];
        currentAttack = [];
        currentDefense = [];
        currentSP_attack = [];
        currentSP_defense = [];
        currentSpeed = [];
        for (var i = 0 ; i < all_poke_data.length ; i++){
            if ( all_poke_data[i] === chosenPokemon ) {
                currentHP.push(allHP[i]);
                currentAttack.push(allAttack[i]);
                currentDefense.push(allDefense[i]);
                currentSP_attack.push(allSP_attack[i]);
                currentSP_defense.push(allSP_defense[i]);
                currentSpeed.push(allSpeed[i]);
            }
        }
    };

    // Default pokemon Data
    setScatterPolar('Bulbasaur'); */

    /* function setScatterPolar(chosenPokemon) {
        getPokeData(chosenPokemon); */

        var trace1 =
    {
            type: 'scatterpolar',
           // r: [PokemonOne.hp, PokemonOne.attack, PokemonOne.defense, PokemonOne.sp_attack, PokemonOne.sp_defense, PokemonOne.speed],
            r: [42, 54, 21, 11, 26, 33],
            theta: ['HP','Attack','Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
            fill: 'toself',
            fillcolor: "#0d6efd" ,
            name: "pokemon 1"
        };
          var trace2 =
        {
            type: 'scatterpolar',
            r: [21, 16, 78, 55, 26, 43],
            theta: ['HP','Attack','Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
            fill: 'toself',
            fillcolor: "#ffc1070"  ,
            name: "pokemon 2"
    }; 
       // var trace3 =
        /* {
            type: 'scatterpolar',
            r: [currentHP, currentAttack, currentDefense, currentSP_attack, currentSP_defense, currentSpeed],
            theta: ['HP','Attack','Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
            fill: 'toself',
            fillcolor: "#7AC74C",
            name: 'Pokemon 3'
        };
        var trace4 =
        {
            type: 'scatterpolar',
            r: [currentHP, currentAttack, currentDefense, currentSP_attack, currentSP_defense, currentSpeed],
            theta: ['HP','Attack','Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
            fill: 'toself',
            fillcolor: "#A33EA1"  ,
            name: 'Pokemon 4'
            };

        var trace5 =
        {
            type: 'scatterpolar',
            r: [currentHP, currentAttack, currentDefense, currentSP_attack, currentSP_defense, currentSpeed],
            theta: ['HP','Attack','Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
            fill: 'toself',
            fillcolor: "#6390F0"  ,
            name: 'Pokemon 5'
    }

        var trace6 =
        {
            type: 'scatterpolar',
            r: [currentHP, currentAttack, currentDefense, currentSP_attack, currentSP_defense, currentSpeed],
            theta: ['HP','Attack','Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
            fill: 'toself',
            fillcolor: "#B6A136"  ,
            name: 'Pokemone 6'
            }
     */
    var data = [trace1, trace2];
    
    layout = {
        title: 'Pokemon Dream Team',
        polar: {
        radialaxis: {
            visible: true,
            range: [0, 200]
        }
        }
    }
     
    Plotly.newPlot("plotdiv", data, layout);

    
     d3.selectAll("#selectNumber").on("change", updatePokemon);

    function updatePokemon() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selectNumber");
        // Assign the value of the dropdown menu option to a variable
        var selected_pokemon = dropdownMenu.property("value"); 
        console.log(selected_pokemon)

        
    

        var index = poke_names.indexOf(selected_pokemon)
        var hp = poke_hp[index]
        var attack = poke_attack[index]  
        var defense = poke_defense[index] 
        var sp_attack = poke_sp_attack[index] 
        var sp_defense = poke_sp_defense[index]
        var speed = poke_speed[index]

        

        
        
        Plotly.restyle("plotdiv", "name", [selected_pokemon],[0]);
        Plotly.restyle("plotdiv", "r[0]", [hp],[0]);
        Plotly.restyle("plotdiv", "r[1]", [attack],[0]);
        Plotly.restyle("plotdiv", "r[2]", [defense],[0]);
        Plotly.restyle("plotdiv", "r[3]", [sp_attack],[0]);
        Plotly.restyle("plotdiv", "r[4]", [sp_defense],[0]);
        Plotly.restyle("plotdiv", "r[5]", [speed],[0]);


    }
    d3.selectAll("#selectPoke").on("change", updatePokemon2);

    function updatePokemon2() {
        // Use D3 to select the dropdown menu
        var dropdownMenu2 = d3.select("#selectPoke");
        // Assign the value of the dropdown menu option to a variable
        var selected_pokemon2 = dropdownMenu2.property("value"); 
        console.log(selected_pokemon2)
        var index2 = poke_names.indexOf(selected_pokemon2)
        var hp2 = poke_hp[index2]
        var attack2 = poke_attack[index2]  
        var defense2 = poke_defense[index2] 
        var sp_attack2 = poke_sp_attack[index2] 
        var sp_defense2 = poke_sp_defense[index2]
        var speed2 = poke_speed[index2]

    console.log(speed2)


        Plotly.restyle("plotdiv", "name", [selected_pokemon2], [1]);
        Plotly.restyle("plotdiv", "r[0]", [hp2],[1]);
        Plotly.restyle("plotdiv", "r[1]", [attack2],[1]);
        Plotly.restyle("plotdiv", "r[2]", [defense2],[1]);
        Plotly.restyle("plotdiv", "r[3]", [sp_attack2],[1]);
        Plotly.restyle("plotdiv", "r[4]", [sp_defense2],[1]);
        Plotly.restyle("plotdiv", "r[5]", [speed2],[1]);
    }    



   /*  var innerContainer = document.querySelector('[data-num="0"'),
        plotEl = innerContainer.querySelector('.plot'),
        pokemonSelector = innerContainer.querySelector('.pokedata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofPokemon, pokemonSelector);

    function updatePokemon(){
        setScatterPolar(pokemonSelector.value);
    }

    pokemonSelector.addEventListener('change', updatepokemon, false); */

/* } */
    // data.forEach((name)) => 
//
    