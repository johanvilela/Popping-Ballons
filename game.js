var EASY = 1;
var MEDIUM = 2;
var HARD = 3;

var timerId = null; // Armazena a chamada de setTimeout()

function startGame() {
    var url = window.location.search;

    var game_level = url.replace("?","");

    var time_in_seconds = 0;

    if (game_level == EASY) {
        time_in_seconds = 50;
    }
    else if (game_level == MEDIUM) {
        time_in_seconds = 30;
    }
    else if (game_level == HARD) {
        time_in_seconds = 20;
    }
    else {time_in_seconds = 3;}

    // Inserting time into chronometer
    document.getElementById('chronometer_time').innerHTML = time_in_seconds;

    // Creating balloons
    var count_balllons = 50;
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
        balloon.onmousedown = function() { burst(this); }

        document.getElementById("scenery").appendChild(balloon);
    }
}

function burst(balloon) {
    var balloon_id = balloon.id;

    document.getElementById(balloon_id).setAttribute('onmousedown', '');
    document.getElementById(balloon_id).src = 'images/small_blue_burst_balloon.png';

    update_score();
}

function update_score(){
    var points = 1;

    var full_balloons_score = document.getElementById('full_balloons').innerHTML;
    var burst_balloons_score = document.getElementById('burst_balloons').innerHTML;

    full_balloons_score = parseInt(full_balloons_score);
    burst_balloons_score = parseInt(burst_balloons_score);

    full_balloons_score -= points;
    burst_balloons_score += points;

    document.getElementById('full_balloons').innerHTML = full_balloons_score;
    document.getElementById('burst_balloons').innerHTML = burst_balloons_score;

    verify_game_status(full_balloons_score);
    
}

function verify_game_status(full_balloons_score){
    if(full_balloons_score == 0){
        alert('YOU ROCK!');
        stop_game();
    }
}

function stop_game(){
    clearTimeout(timerId);
}