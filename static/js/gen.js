function init() {

  d3.json("/api/notes/postgres").then(data => {
    var PokemonCleanData = data
    console.log(PokemonCleanData)



//*****All*****

//Use the filter method to create a custom filtering function

function filterPokemonGenAll(pokemon) {
  return pokemon.generation < 10;
}

// Use filter() to pass the function as its argument
var filteredPokemonAll = PokemonCleanData.filter(filterPokemonGenAll);

//  Check to make sure your are filtering your pokemon.
console.log(filteredPokemonAll);

// Use the map method with the arrow function to return all the filtered pokemon types.
var filteredPokemontypeAll = filteredPokemonAll.map(pokemon => pokemon.type1);

//  Check your filtered pokemon types
console.log(filteredPokemontypeAll);

var arr = filteredPokemontypeAll
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var PokemonTypeCountsAll = {
  "Bug": counts['bug'],
  "Dark": counts['dark'],
  "Dragon": counts['dragon'],
  "Electric": counts['electric'],
  "Fairy": counts['fairy'],
  "Fighting": counts['fighting'],
  "Fire": counts['fire'],
  "Flying": counts['flying'],
  "Ghost": counts['ghost'],
  "Grass": counts['grass'],
  "Ground": counts['ground'],
  "Ice": counts['ice'],
  "Normal": counts['normal'],
  "Poison": counts['poison'],
  "Psychic": counts['psychic'],
  "Rock": counts['rock'],
  "Steel": counts['steel'],
  "Water": counts['water']
};

var xvaluesAll = []
var yvaluesAll = []
Object.entries(PokemonTypeCountsAll).forEach(([key, value]) => {
  xvaluesAll.push(key);
  yvaluesAll.push(value)

})

console.log(PokemonTypeCountsAll)

// *****1*****

function filterPokemonGen1(pokemon) {
  return pokemon.generation == 1;
}

// Use filter() to pass the function as its argument
var filteredPokemon1 = PokemonCleanData.filter(filterPokemonGen1);

//  Check to make sure your are filtering your pokemon.
console.log(filteredPokemon1);

// Use the map method with the arrow function to return all the filtered pokemon types.
var filteredPokemontype1 = filteredPokemon1.map(pokemon => pokemon.type1);

//  Check your filtered pokemon types
console.log(filteredPokemontype1);

var arr = filteredPokemontype1
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var PokemonTypeCounts1 = {
  "Bug": counts['bug'],
  "Dark": counts['dark'],
  "Dragon": counts['dragon'],
  "Electric": counts['electric'],
  "Fairy": counts['fairy'],
  "Fighting": counts['fighting'],
  "Fire": counts['fire'],
  "Flying": counts['flying'],
  "Ghost": counts['ghost'],
  "Grass": counts['grass'],
  "Ground": counts['ground'],
  "Ice": counts['ice'],
  "Normal": counts['normal'],
  "Poison": counts['poison'],
  "Psychic": counts['psychic'],
  "Rock": counts['rock'],
  "Steel": counts['steel'],
  "Water": counts['water']
};

var xvalues1 = []
var yvalues1 = []
Object.entries(PokemonTypeCounts1).forEach(([key, value]) => {
  xvalues1.push(key);
  yvalues1.push(value)

})

console.log(PokemonTypeCounts1)

// *****2*****

function filterPokemonGen2(pokemon) {
  return pokemon.generation == 2;
}

// Use filter() to pass the function as its argument
var filteredPokemon2 = PokemonCleanData.filter(filterPokemonGen2);

//  Check to make sure your are filtering your pokemon.
console.log(filteredPokemon2);

// Use the map method with the arrow function to return all the filtered pokemon types.
var filteredPokemontype2 = filteredPokemon2.map(pokemon => pokemon.type1);

//  Check your filtered pokemon types
console.log(filteredPokemontype2);

var arr = filteredPokemontype2
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var PokemonTypeCounts2 = {
  "Bug": counts['bug'],
  "Dark": counts['dark'],
  "Dragon": counts['dragon'],
  "Electric": counts['electric'],
  "Fairy": counts['fairy'],
  "Fighting": counts['fighting'],
  "Fire": counts['fire'],
  "Flying": counts['flying'],
  "Ghost": counts['ghost'],
  "Grass": counts['grass'],
  "Ground": counts['ground'],
  "Ice": counts['ice'],
  "Normal": counts['normal'],
  "Poison": counts['poison'],
  "Psychic": counts['psychic'],
  "Rock": counts['rock'],
  "Steel": counts['steel'],
  "Water": counts['water']
};

var xvalues2 = []
var yvalues2 = []
Object.entries(PokemonTypeCounts2).forEach(([key, value]) => {
  xvalues2.push(key);
  yvalues2.push(value)

})

console.log(PokemonTypeCounts2)

// *****3*****

function filterPokemonGen3(pokemon) {
  return pokemon.generation == 3;
}

// Use filter() to pass the function as its argument
var filteredPokemon3 = PokemonCleanData.filter(filterPokemonGen3);

//  Check to make sure your are filtering your pokemon.
console.log(filteredPokemon3);

// Use the map method with the arrow function to return all the filtered pokemon types.
var filteredPokemontype3 = filteredPokemon3.map(pokemon => pokemon.type1);

//  Check your filtered pokemon types
console.log(filteredPokemontype3);

var arr = filteredPokemontype3
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var PokemonTypeCounts3 = {
  "Bug": counts['bug'],
  "Dark": counts['dark'],
  "Dragon": counts['dragon'],
  "Electric": counts['electric'],
  "Fairy": counts['fairy'],
  "Fighting": counts['fighting'],
  "Fire": counts['fire'],
  "Flying": counts['flying'],
  "Ghost": counts['ghost'],
  "Grass": counts['grass'],
  "Ground": counts['ground'],
  "Ice": counts['ice'],
  "Normal": counts['normal'],
  "Poison": counts['poison'],
  "Psychic": counts['psychic'],
  "Rock": counts['rock'],
  "Steel": counts['steel'],
  "Water": counts['water']
};

var xvalues3 = []
var yvalues3 = []
Object.entries(PokemonTypeCounts3).forEach(([key, value]) => {
  xvalues3.push(key);
  yvalues3.push(value)

})

console.log(PokemonTypeCounts3)

// *****4*****

function filterPokemonGen4(pokemon) {
  return pokemon.generation == 4;
}

// Use filter() to pass the function as its argument
var filteredPokemon4 = PokemonCleanData.filter(filterPokemonGen4);

//  Check to make sure your are filtering your pokemon.
console.log(filteredPokemon4);

// Use the map method with the arrow function to return all the filtered pokemon types.
var filteredPokemontype4 = filteredPokemon4.map(pokemon => pokemon.type1);

//  Check your filtered pokemon types
console.log(filteredPokemontype4);

var arr = filteredPokemontype4
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var PokemonTypeCounts4 = {
  "Bug": counts['bug'],
  "Dark": counts['dark'],
  "Dragon": counts['dragon'],
  "Electric": counts['electric'],
  "Fairy": counts['fairy'],
  "Fighting": counts['fighting'],
  "Fire": counts['fire'],
  "Flying": counts['flying'],
  "Ghost": counts['ghost'],
  "Grass": counts['grass'],
  "Ground": counts['ground'],
  "Ice": counts['ice'],
  "Normal": counts['normal'],
  "Poison": counts['poison'],
  "Psychic": counts['psychic'],
  "Rock": counts['rock'],
  "Steel": counts['steel'],
  "Water": counts['water']
};

var xvalues4 = []
var yvalues4 = []
Object.entries(PokemonTypeCounts4).forEach(([key, value]) => {
  xvalues4.push(key);
  yvalues4.push(value)

})

console.log(PokemonTypeCounts4)

// *****5*****

function filterPokemonGen5(pokemon) {
  return pokemon.generation == 5;
}

// Use filter() to pass the function as its argument
var filteredPokemon5 = PokemonCleanData.filter(filterPokemonGen5);

//  Check to make sure your are filtering your pokemon.
console.log(filteredPokemon5);

// Use the map method with the arrow function to return all the filtered pokemon types.
var filteredPokemontype5 = filteredPokemon5.map(pokemon => pokemon.type1);

//  Check your filtered pokemon types
console.log(filteredPokemontype5);

var arr = filteredPokemontype5
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var PokemonTypeCounts5 = {
  "Bug": counts['bug'],
  "Dark": counts['dark'],
  "Dragon": counts['dragon'],
  "Electric": counts['electric'],
  "Fairy": counts['fairy'],
  "Fighting": counts['fighting'],
  "Fire": counts['fire'],
  "Flying": counts['flying'],
  "Ghost": counts['ghost'],
  "Grass": counts['grass'],
  "Ground": counts['ground'],
  "Ice": counts['ice'],
  "Normal": counts['normal'],
  "Poison": counts['poison'],
  "Psychic": counts['psychic'],
  "Rock": counts['rock'],
  "Steel": counts['steel'],
  "Water": counts['water']
};

var xvalues5 = []
var yvalues5 = []
Object.entries(PokemonTypeCounts5).forEach(([key, value]) => {
  xvalues5.push(key);
  yvalues5.push(value)

})

console.log(PokemonTypeCounts5)

// *****6*****

function filterPokemonGen6(pokemon) {
  return pokemon.generation == 6;
}

// Use filter() to pass the function as its argument
var filteredPokemon6 = PokemonCleanData.filter(filterPokemonGen6);

//  Check to make sure your are filtering your pokemon.
console.log(filteredPokemon6);

// Use the map method with the arrow function to return all the filtered pokemon types.
var filteredPokemontype6 = filteredPokemon6.map(pokemon => pokemon.type1);

//  Check your filtered pokemon types
console.log(filteredPokemontype6);

var arr = filteredPokemontype6
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var PokemonTypeCounts6 = {
  "Bug": counts['bug'],
  "Dark": counts['dark'],
  "Dragon": counts['dragon'],
  "Electric": counts['electric'],
  "Fairy": counts['fairy'],
  "Fighting": counts['fighting'],
  "Fire": counts['fire'],
  "Flying": counts['flying'],
  "Ghost": counts['ghost'],
  "Grass": counts['grass'],
  "Ground": counts['ground'],
  "Ice": counts['ice'],
  "Normal": counts['normal'],
  "Poison": counts['poison'],
  "Psychic": counts['psychic'],
  "Rock": counts['rock'],
  "Steel": counts['steel'],
  "Water": counts['water']
};

var xvalues6 = []
var yvalues6 = []
Object.entries(PokemonTypeCounts6).forEach(([key, value]) => {
  xvalues6.push(key);
  yvalues6.push(value)

})

console.log(PokemonTypeCounts6)

// *****7*****

function filterPokemonGen7(pokemon) {
  return pokemon.generation == 7;
}

// Use filter() to pass the function as its argument
var filteredPokemon7 = PokemonCleanData.filter(filterPokemonGen7);

//  Check to make sure your are filtering your pokemon.
console.log(filteredPokemon7);

// Use the map method with the arrow function to return all the filtered pokemon types.
var filteredPokemontype7 = filteredPokemon7.map(pokemon => pokemon.type1);

//  Check your filtered pokemon types
console.log(filteredPokemontype7);

var arr = filteredPokemontype7
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var PokemonTypeCounts7 = {
  "Bug": counts['bug'],
  "Dark": counts['dark'],
  "Dragon": counts['dragon'],
  "Electric": counts['electric'],
  "Fairy": counts['fairy'],
  "Fighting": counts['fighting'],
  "Fire": counts['fire'],
  "Flying": counts['flying'],
  "Ghost": counts['ghost'],
  "Grass": counts['grass'],
  "Ground": counts['ground'],
  "Ice": counts['ice'],
  "Normal": counts['normal'],
  "Poison": counts['poison'],
  "Psychic": counts['psychic'],
  "Rock": counts['rock'],
  "Steel": counts['steel'],
  "Water": counts['water']
};

var xvalues7 = []
var yvalues7 = []
Object.entries(PokemonTypeCounts7).forEach(([key, value]) => {
  xvalues7.push(key);
  yvalues7.push(value)

})

console.log(PokemonTypeCounts7)

console.log(xvalues7)
console.log(yvalues7)

// Create your trace.
var trace = {
  x: xvalues1,
  y: yvalues1,
  marker: {
    color: ['#A6B91A', '#705746', '#6F35FC', '#F7D02C',
      '#D685AD', '#C22E28', '#EE8130', '#A98FF3', '#735797',
      '#7AC74C', '#E2BF65', '#96D9D6', '#A8A77A', '#A33EA1',
      '#F95587', '#B6A136', '#B7B7CE', '#6390F0']
  },
  type: "bar"

};

// # Defining colors for graphs 
colors = {
  "Bug": "#A6B91A",
  "Dark": "#705746",
  "Dragon": "#6F35FC",
  "Electric": "#F7D02C",
  "Fairy": "#D685AD",
  "Fighting": "#C22E28",
  "Fire": "#EE8130",
  "Flying": "#A98FF3",
  "Ghost": "#735797",
  "Grass": "#7AC74C",
  "Ground": "#E2BF65",
  "Ice": "#96D9D6",
  "Normal": "#A8A77A",
  "Poison": "#A33EA1",
  "Psychic": "#F95587",
  "Rock": "#B6A136",
  "Steel": "#B7B7CE",
  "Water": "#6390F0",
}

// Create the data array for plot
var data = [trace];

// Define plot layout
var layout = {
  barmode: 'stack',
  title: "Pokemon Types by Generation",
  xaxis: { title: "Type of Pokemon" },
  yaxis: { title: "Number of Pokemon" }

};

// Plot the chart
Plotly.newPlot("barchart", data, layout);

//****************/

// Initializes the page with a default plot
function init() {
  data = [{
    x: xvaluesAll,
    y: yvaluesAll,
    marker: {
      color: ['#A6B91A', '#705746', '#6F35FC', '#F7D02C',
        '#D685AD', '#C22E28', '#EE8130', '#A98FF3', '#735797',
        '#7AC74C', '#E2BF65', '#96D9D6', '#A8A77A', '#A33EA1',
        '#F95587', '#B6A136', '#B7B7CE', '#6390F0']
    },
    type: "bar" }];

  var layout = {
    barmode: 'stack',
    title: "Pokemon Types by Generation",
    xaxis: { title: "Type of Pokemon" },
    yaxis: { title: "Number of Pokemon" }

  };  

  // var CHART = d3.selectAll("#plot").node();

  Plotly.newPlot("barchart", data, layout);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("body").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  console.log(dropdownMenu)

  // var CHART = d3.selectAll("#plot").node();

  // Initialize x and y arrays
  var x = [];
  var y = [];

  switch(dataset) {
    case "PokemonGen1":
      x = xvalues1;
      y = yvalues1;
      break;

    case "PokemonGen2":
      x = xvalues2;
      y = yvalues2;
      break;

    case "PokemonGen3":
      x = xvalues3;
      y = yvalues3;
      break;

    case "PokemonGen4":
      x = xvalues4;
      y = yvalues4;
      break;

    case "PokemonGen5":
      x = xvalues5;
      y = yvalues5;
      break;

    case "PokemonGen6":
      x = xvalues6;
      y = yvalues6;
      break;

    case "PokemonGen7":
      x = xvalues7;
      y = yvalues7;
      break;

    case "PokemonGenAll":
      x = xvaluesAll;
      y = yvaluesAll;
      break;

}


  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("barchart", "x", [x]);
  Plotly.restyle("barchart", "y", [y]);
}

})
}
init();

