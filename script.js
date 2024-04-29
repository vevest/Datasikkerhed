// Definerer mine variabler
var scenarie = document.getElementById('scenarie');
var btn1 = document.getElementById('btn1');
var screen1 = document.getElementById('screen1');
var btn2 = document.getElementById('btn2');
var screen2 = document.getElementById('screen2');
var btn3 = document.getElementById('btn3');
var screen3 = document.getElementById('screen3');
var screen2a = document.getElementById('screen2a');
var screen2b = document.getElementById('screen2b');
var screen3a = document.getElementById('screen3a');
var screen3b = document.getElementById('screen3b');
var screen3c = document.getElementById('screen3c');
var knapper = document.getElementsByClassName('knap');
var billeder = document.querySelectorAll('.quiz-container img');

// Skjul alle skærme undtagen scenarie ved start af testen
hideAllScreens();
scenarie.classList.remove('hide');

// Funktion til at skjule alle skærme
function hideAllScreens() {
    if (screen1) screen1.classList.add('hide');
    if (screen2) screen2.classList.add('hide');
    if (screen3) screen3.classList.add('hide');
    if (screen2a) screen2a.classList.add('hide');
    if (screen2b) screen2b.classList.add('hide');
    if (screen3a) screen3a.classList.add('hide');
    if (screen3b) screen3b.classList.add('hide');
    if (screen3c) screen3c.classList.add('hide');
}

// Funktion til at skifte billederne
function changeImage(screenId) {
    billeder.forEach(function(billede) {
        billede.style.display = 'none';
    });

    var billedeForSkærm = document.querySelector(`#${screenId} img`);
    if (billedeForSkærm) billedeForSkærm.style.display = 'block';
}

// Tilføj eventlistener til knap 1
btn1.addEventListener('click', function() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // Skift til næste skærm baseret på valgt svarmulighed
        if (selectedAnswer.value === 'svarA') {
            scenarie.classList.add('hide');
            screen1.classList.remove('hide');
            changeImage('screen1');
        } else if (selectedAnswer.value === 'svarB') {
            scenarie.classList.add('hide');
            screen2.classList.remove('hide');
            changeImage('screen2');
        } else if (selectedAnswer.value === 'svarC') {
            scenarie.classList.add('hide');
            screen3.classList.remove('hide');
            changeImage('screen3');
        }
    } else {
        alert('Vælg venligst et svar for at fortsætte.');
    }
});

// Tilføj eventlistener til knap 2
btn2.addEventListener('click', function() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // Skift til næste skærm baseret på valgt svarmulighed
        if (selectedAnswer.value === 'svarD') {
            screen2.classList.add('hide');
            screen2a.classList.remove('hide');
            changeImage('screen2a');
        } else if (selectedAnswer.value === 'svarE') {
            screen2.classList.add('hide');
            screen2b.classList.remove('hide');
            changeImage('screen2b');
        }
    } else {
        alert('Vælg venligst et svar for at fortsætte.');
    }
});

// Tilføj eventlistener til knap 3
btn3.addEventListener('click', function() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // Skift til næste skærm baseret på valgt svarmulighed
        if (selectedAnswer.value === 'svarF') {
            screen3.classList.add('hide');
            screen3a.classList.remove('hide');
            changeImage('screen3a');
        } else if (selectedAnswer.value === 'svarG') {
            screen3.classList.add('hide');
            screen3b.classList.remove('hide');
            changeImage('screen3b');
        } else if (selectedAnswer.value === 'svarH') {
            screen3.classList.add('hide');
            screen3c.classList.remove('hide');
            changeImage('screen3c');
        }
    } else {
        alert('Vælg venligst et svar for at fortsætte.');
    }
});

// Tilføj eventlistener til knapperne med class "knap"
for (var i = 0; i < knapper.length; i++) {
    knapper[i].addEventListener('click', function() {
        window.location.href = 'test.html'; // Ændr denne URL til den ønskede destination
    });
}