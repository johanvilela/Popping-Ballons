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


}