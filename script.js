// Variables to keep track of time
let startTime;
let elapsedTime = 0;
let timerInterval;

// Get references to HTML elements
const display = document.getElementById('display');

// Function to convert time to a readable format (MM:SS:MS)
function formatTime(time) {
    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = Math.floor((time % 1000) / 10);

    // Format time with leading zeros if needed
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

// Function to start the stopwatch
function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }, 10); // Update every 10ms for better accuracy

    // Disable start button while running
    document.getElementById('start').disabled = true;
}

// Function to stop the stopwatch
function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('start').disabled = false;
}

// Function to reset the stopwatch
function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = "00:00:00";
    document.getElementById('start').disabled = false;
}

// Event listeners for the buttons
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
