function init() {
    loadData()
}

function loadData() {
    d3.json("/api/notes/postgres").then(data => {
        var poke_data = data
        console.log(data)
    })
}

// function buildChart(data) {
//     data.forEach((item) => {
//         atk
//     })
// }

init()