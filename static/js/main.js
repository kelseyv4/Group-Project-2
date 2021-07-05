function init() {
    // loadData()
    d3.json("/api/notes/postgres").then(data => {
        var poke_data = data
        console.log(poke_data)

    buildChart(poke_data)

    })
}

function buildChart(poke_data) {
    var dropdown = d3.select(".dropdown-menu")
    var menu_type = dropdown.property("value")

    var type1 = [poke_data[0].type1]
    var type2 = [poke_data[0].type2]
    var name = [poke_data[0].name]
    var atk = [String(poke_data[0].attack)]
    var def = [String(poke_data[0].defense)]
    var hp = [String(poke_data[0].hp)]
    var spatk = [String(poke_data[0].sp_attack)]
    var spdef = [String(poke_data[0].sp_defense)]
    var spd = [String(poke_data[0].speed)]
  
    // data.forEach(item => {
    //     if (item.type1 === menu_type | item.type2 === menu_type) {
    //         console.log(item)
    //     }
    // })
    
    var trace1 = {
        type: 'scatter',
        x: atk,
        y: name,
        mode: 'markers',
        name: 'Attack',
        marker: {
          color: 'rgba(156, 165, 196, 0.95)',
          line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
          },
          symbol: 'circle',
          size: 16
        }
      };

    var trace2 = {
        type: 'scatter',
        x: def,
        y: name,
        mode: 'markers',
        name: 'Defense',
        marker: {
          color: 'rgba(156, 165, 196, 0.95)',
          line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
          },
          symbol: 'circle',
          size: 16
        }
      };  

    var trace3 = {
        type: 'scatter',
        x: hp,
        y: name,
        mode: 'markers',
        name: 'Hit Points',
        marker: {
          color: 'rgba(156, 165, 196, 0.95)',
          line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
          },
          symbol: 'circle',
          size: 16
        }
      };

    var trace4 = {
        type: 'scatter',
        x: spatk,
        y: name,
        mode: 'markers',
        name: 'Special Attack',
        marker: {
          color: 'rgba(156, 165, 196, 0.95)',
          line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
          },
          symbol: 'circle',
          size: 16
        }
      };

    var trace5 = {
        type: 'scatter',
        x: spdef,
        y: name,
        mode: 'markers',
        name: 'Special Defense',
        marker: {
          color: 'rgba(156, 165, 196, 0.95)',
          line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
          },
          symbol: 'circle',
          size: 16
        }
      };

    var trace6 = {
        type: 'scatter',
        x: spd,
        y: name,
        mode: 'markers',
        name: 'Speed',
        marker: {
          color: 'rgba(156, 165, 196, 0.95)',
          line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
          },
          symbol: 'circle',
          size: 16
        }
      };

    var data = [trace1,trace2,trace3,trace4,trace5,trace6]

    layout = {
        title:"Intra-Type Stat Comparison",
        xaxis: {
            showgrid: false,
            showline: true,
            linecolor: 'rgb(102, 102, 102)',
            titlefont: {
                font: {
                color: 'rgb(204, 204, 204)'
                }
            },
            tickfont: {
                font: {
                color: 'rgb(102, 102, 102)'
                }
            },
            autotick: false,
            dtick: 10,
            ticks: 'outside',
            tickcolor: 'rgb(102, 102, 102)'
            },
        margin: {
            l: 140,
            r: 40,
            b: 50,
            t: 80
            },
        legend: {
            font: {
                size: 10,
            },
            yanchor: 'middle',
            xanchor: 'right'
            },
        width: 600,
        height: 600,
        paper_bgcolor: 'rgb(254, 247, 234)',
        plot_bgcolor: 'rgb(254, 247, 234)',
        hovermode: 'closest'
        };

    Plotly.newPlot("chart",data,layout)

    console.log(atk)
    }

// function eventHandler() {
//     var dropdown = d3.select(".dropdown-menu")
//     var menu_type = dropdown.property("value")

//     dropdown.on("change",buildChart())
// }

init()