
let homeScoreEl = document.getElementById("home-score")

let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

let timeLeft = 600
let currentQuarter = 1
let timeInterval = null;
const clockElement = document.getElementById("clock")
const quarterElement = document.getElementById("quarter")

function startClock() {
  if (timeInterval) return;

  timeInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft --;
      updateClockDisplay();
    } else {
      nextQuarter()
    }
  }, 1000)
}

function pauseClock() {
  clearInterval(timeInterval)
  timeInterval = null;
}

function resetClock() {
  pauseClock()
  timeLeft = 600
  currentQuarter = 1;
  updateClockDisplay()
  quarterElement.innerText = currentQuarter
}

function nextQuarter() {
  pauseClock()
  if (currentQuarter < 4) {
    currentQuarter++;
    timeLeft = 600;
    quarterElement.innerText = currentQuarter;
    startClock()
  }
}

function updateClockDisplay() {
  let minutes = Math.floor(timeLeft / 60)
  let seconds = timeLeft % 60
  clockElement.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

updateClockDisplay()

function homeAdd1() {
  homeScore = homeScore + 1
    homeScoreEl.textContent = homeScore
}

function homeAdd2() {
  homeScore = homeScore + 2
    homeScoreEl.textContent = homeScore
}

function homeAdd3() {
  homeScore = homeScore + 3
    homeScoreEl.textContent = homeScore
}

function guestAdd1() {
  guestScore = guestScore + 1
  guestScoreEl.textContent = guestScore
}

function guestAdd2() {
  guestScore = guestScore + 2
  guestScoreEl.textContent = guestScore
}

function guestAdd3() {
  guestScore = guestScore + 3
  guestScoreEl.textContent = guestScore
}
