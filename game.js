var EASY = 1;
var MEDIUM = 2;
var HARD = 3;

var timerId = null; // Armazena a chamada de setTimeout()

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
    else {time_in_seconds = 3;}

    // Inserting time into chronometer
    document.getElementById('chronometer_time').innerHTML = time_in_seconds;

    // Creating balloons
    var count_balllons = 20;
    createBallons(count_balllons);

    // Print number of full balloons
    document.getElementById('full_balloons').innerHTML = count_balllons;
    document.getElementById('burst_balloons').innerHTML = 0;

    countdown(time_in_seconds);

}

function countdown(seconds){

    if (seconds == -1) {
        clearTimeout(timerId); // stop setTimeout()
        game_over();
        return false;
    }

    // Inserting time into chronometer
    document.getElementById('chronometer_time').innerHTML = seconds;

    seconds--;

    timerId = setTimeout("countdown(" + seconds + ")", 1000);

}

function game_over() {
    alert("You lose!");
}

function createBallons(count_balllons){
    for(var i = 1; i <= count_balllons; i++) {
        var balloon = document.createElement("img");
        balloon.src = 'images/small_blue_balloon.png';
        balloon.style.margin = "12px";
        balloon.id = 'balloon' + i;
        balloon.onclick = function() { burst(this); }

        document.getElementById("scenery").appendChild(balloon);
    }
}

function burst(balloon) {
    var balloon_id = balloon.id;

    document.getElementById(balloon_id).src = 'images/small_blue_burst_balloon.png';
}