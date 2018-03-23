var EASY = 1;
var MEDIUM = 2;
var HARD = 3;

function startGame() {
    var url = window.location.search;

    var game_level = url.replace("?","");

    var time_in_seconds = 0;

    if (game_level == EASY) {
        time_in_seconds = 120;
    }
    else if (game_level == MEDIUM) {
        time_in_seconds = 60;
    }
    else if (game_level == HARD) {
        time_in_seconds = 30;
    }

    // Inserting time into chronometer
    document.getElementById('chronometer_time').innerHTML = time_in_seconds;

    // Creating balloons
    var count_balllons = 20;
    createBallons(count_balllons);

    // Print number of full balloons
    document.getElementById('full_balloons').innerHTML = count_balllons;
    document.getElementById('burst_balloons').innerHTML = 0;


}

function createBallons(count_balllons){
    for(var i = 1; i <= count_balllons; i++) {
        var balloon = document.createElement("img");
        balloon.src = 'images/small_blue_balloon.png';
        balloon.style.margin = "12px";
        document.getElementById("scenery").appendChild(balloon);
    }
}