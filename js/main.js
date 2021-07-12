//LE DIAGRAMME


var MeSeContext = document.getElementById("MeSeStatusCanvas").getContext("2d");
var MeSeData = {
    labels: [
        "ME",
        "SE"
    ],
    datasets: [{
        label: "Test",
        data: [100, 75],
        backgroundColor: ["#669911", "#119966"],
        hoverBackgroundColor: ["#66A2EB", "#FCCE56"]
    }]
};

var MeSeChart = new Chart(MeSeContext, {
    type: 'bar',
    data: MeSeData,
    options: {
        scales: {
            xAxes: [{
                ticks: {
            		min: 60
                }
            }],
            yAxes: [{
            	stacked: true
            }]
        }

    }
});
