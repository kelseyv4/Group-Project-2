function init(){
    d3.json("https://pokedreamteam.herokuapp.com/api/notes/postgres").then(data => {
    var poke_data = data
    console.log(poke_data)

       // updateChart(poke_data)

       // eventHandler()

    })
    }

    init()
    , function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var all_poke_data = unpack(rows, 'name'),
        allHP = unpack(rows, 'hp'),
        allAttack = unpack(rows, 'attack'),
        allDefense = unpack(rows, 'defense'),
        allSP_attack = unpack(rows, 'sp_attack'),
        allSP_defense = unpack(rows, 'sp_defense'),
        allSpeed = unpack(rows, 'speed'),
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
                currentDefense.push(alldefense[i]);
                currentSP_attack.push(allSP_attack[i]);
                currentSP_defense.push(allSP_defense[i]);
                currentSpeed.push(allSpeed[i]);
            }
        }
    };

    // Default Country Data
    setScatterPolar('Bulbasaur');

    function setScatterPolar(chosenPokemon) {
        getPokeData(chosenPokemon);

        var trace1 =
    {
            type: 'scatterpolar',
            r: [currentHP, currentAttack, currentDefense, currentSP_attack, currentSP_defense, currentSpeed],
            theta: ['HP','Attack','Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
            fill: 'toself',
            fillcolor: "#C22E28" ,
            name: 'Pokemon 1'
        };
        /*  var trace2 =
        {
            type: 'scatterpolar',
            r: [currentHP, currentAttack, currentDefense, currentSP_attack, currentSP_defense, currentSpeed],
            theta: ['HP','Attack','Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
            fill: 'toself',
            fillcolor: "#EE8130"  ,
            name: 'Pokemon 2'
    };
        var trace3 =
        {
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
    var data = [trace1];
    
    layout = {
        title: 'Pokemon Dream Team',
        polar: {
        radialaxis: {
            visible: true,
            range: [0, 50]
        }
        }
    }
    
    Plotly.newPlot("plotdiv", data, layout)
    };

    var innerContainer = document.querySelector('[data-num="0"'),
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

    pokemonSelector.addEventListener('change', updatepokemon, false);

    }
    // data.forEach((name)) => 




// function filterPokemon






