function init() {
    // loadData()
    d3.json("/api/notes/postgres").then(data => {
        var poke_data = data
        console.log(poke_data)

    // buildChart(poke_data)

    // eventHandler()

    })
}

function buildChart(data) {
    var name = ["N/A"]
    var atk = [0]
    var def = [0]
    var hp = [0]
    var spatk = [0]
    var spdef = [0]
    var spd = [0] 

    var trace1 = {
        type: 'scatter',
        x: atk,
        y: name,
        mode: 'markers',
        name: 'Attack',
        marker: {
        color: 'rgba(204, 0, 0, 0.50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'diamond-open',
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
        color: 'rgba(0, 0, 204, .50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'square-open',
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
        color: 'rgba(0, 204, 0, 0.50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'cross-open',
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
        color: 'rgba(204, 204, 0, 0.50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'star-diamond-open',
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
        color: 'rgba(204, 0, 204, 0.50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'star-square-open',
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
        color: 'rgba(0, 204, 204, 0.50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'circle-open',
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
}

function updateChart(data) {
    // var dropdown_item = d3.select(".dropdown-item")
    // var menu_type = dropdown_item.property("value")

    console.log(data)

    // var type1 = [data[0].type1]
    // var type2 = [data[0].type2]
    // var name = [data[0].name]
    // var atk = [String(data[0].attack)]
    // var def = [String(data[0].defense)]
    // var hp = [String(data[0].hp)]
    // var spatk = [String(data[0].sp_attack)]
    // var spdef = [String(data[0].sp_defense)]
    // var spd = [String(data[0].speed)]

    var name = []
    var atk = []
    var def = []
    var hp = []
    var spatk = []
    var spdef = []
    var spd = [] 
  
    data.forEach(item => {
        if (item.type1 === "grass" | item.type2 === "grass") {
            // console.log(item)         
            
            name.push(item.name)
            atk.push(String(item.attack))
            def.push(String(item.defense))
            hp.push(String(item.hp))
            spatk.push(String(item.sp_attack))
            spdef.push(String(item.sp_defense))
            spd.push(String(item.speed))
        }
    })

    var trace1 = {
        type: 'scatter',
        x: atk,
        y: name,
        mode: 'markers',
        name: 'Attack',
        marker: {
        color: 'rgba(204, 0, 0, 0.50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'diamond-open',
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
        color: 'rgba(0, 0, 204, .50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'square-open',
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
        color: 'rgba(0, 204, 0, 0.50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'cross-open',
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
        color: 'rgba(204, 204, 0, 0.50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'star-diamond-open',
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
        color: 'rgba(204, 0, 204, 0.50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'star-square-open',
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
        color: 'rgba(0, 204, 204, 0.50)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'circle-open',
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
    
}

function eventHandler() {
    var dropdown_item = d3.select(".dropdown-item")
    var menu_type = dropdown_item.property("value")

    dropdown_item.on("change",updateChart(menu_type))
}

init()