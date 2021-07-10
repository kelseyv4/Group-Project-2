function init() {
    d3.json("/api/notes/postgres").then(data => {
        var poke_data = data
        console.log(poke_data)

    buildChart(poke_data)

    typeEventHandler()

    // genEventHandler()

    })
}

function buildChart(data) {
    // var gen_dropdown = d3.select("#gen_menu")
    // var menu_gen = gen_dropdown.property("value")

    // var gen_list = []
    

    // data.forEach(item => {
    //     if (item.generation === Number(menu_gen)) {
    //         gen_list.push(item)
    //     }
    // })

    var type_dropdown = d3.select("#type_menu")
    var menu_type = type_dropdown.property("value")

    var name = []
    var atk = []
    var def = []
    var hp = []
    var spatk = []
    var spdef = []
    var spd = []

    // change "data" to "gen_list" if utilizing generational filter
    data.forEach(item => {
        if (item.type1 === menu_type | item.type2 === menu_type) {
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
        
        xaxis: {
            showgrid: true,
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
        width: 1110,
        height: 2000,
        paper_bgcolor: 'rgb(255, 255, 255)',
        plot_bgcolor: 'rgb(255, 255, 255)',
        hovermode: 'closest'
        };

    Plotly.newPlot("chart",data,layout)
    
}

function typeEventHandler() {
    var dropdown = d3.select("#type_menu")
    var menu_type = dropdown.property("value")
    // console.log(menu_type)

    dropdown.on("change",updateChart())    
}

// function genEventHandler() {
//     var dropdown = d3.select("#gen_menu")
//     var menu_type = dropdown.property("value")
//     // console.log(menu_type)

//     dropdown.on("change",updateChart())    
// }

function updateChart() {
    d3.json("/api/notes/postgres").then(data => {
        var poke_data = data

    var chart = d3.select("#chart")
    chart.html("")

    buildChart(poke_data)
    })
}

init()