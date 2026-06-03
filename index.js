function addScore(team, points) {
    let scoreElement = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
    updateArrows();
}

function updateArrows() {
    let homeScore = parseInt(document.getElementById("home-score").textContent);
    let guestScore = parseInt(document.getElementById("guest-score").textContent);

    let homeArrowUp = document.getElementById("home-arrow-up");
    let homeArrowDown = document.getElementById("home-arrow-down");
    let guestArrowUp = document.getElementById("guest-arrow-up");
    let guestArrowDown = document.getElementById("guest-arrow-down");

    if (homeScore > guestScore) {
        homeArrowUp.style.display = "flex";
        homeArrowDown.style.display = "none";
        guestArrowUp.style.display = "none";
        guestArrowDown.style.display = "flex";
    } else if (guestScore > homeScore) {
        guestArrowUp.style.display = "flex";
        guestArrowDown.style.display = "none";
        homeArrowUp.style.display = "none";
        homeArrowDown.style.display = "flex";
    } else {
        homeArrowUp.style.display = "none";
        homeArrowDown.style.display = "none";
        guestArrowUp.style.display = "none";
        guestArrowDown.style.display = "none";
    }
}

function addFoul(team) {
    let foulElement = document.getElementById(`${team}-fouls`);
    let currentFouls = parseInt(foulElement.textContent);
    foulElement.textContent = currentFouls + 1;
}

function addPeriod() {
    let periodElement = document.getElementById("period-clock");
    let currentPeriod = parseInt(periodElement.textContent);
    periodElement.textContent = currentPeriod + 1;
    resetClock();
    startClock();
}

function newGame() {
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
    document.getElementById("home-fouls").textContent = 0;
    document.getElementById("guest-fouls").textContent = 0;
    document.getElementById("period-clock").textContent = 1;
    document.getElementById("clock").textContent = "00:10:00";
    document.getElementById("home-arrow-up").style.display = "none";
    document.getElementById("home-arrow-down").style.display = "none";
    document.getElementById("guest-arrow-up").style.display = "none";
    document.getElementById("guest-arrow-down").style.display = "none";
    resetClock();
    startClock();
}

let clockInterval;

function startClock() {
    let clockElement = document.getElementById("clock");
    let time = 10 * 60;

    clockInterval = setInterval(() => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;
        clockElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        time--;

        if (time < 0) {
            clearInterval(clockInterval);
            clockElement.textContent = "00:00:00";
        }
    }, 1000);
}

function resetClock() {
    clearInterval(clockInterval);
    document.getElementById("clock").textContent = "00:10:00";
}

startClock();
