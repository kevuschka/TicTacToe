let fields = [];

let currentShape = 'circle';
let gameOver = false;
let AUDIO_GAMEOVER = new Audio('audio/gameover.mp3');
let AUDIO_RESTART = new Audio('audio/restart.mp3');


function select(id) {
    changeCurrentShape(id);
    draw();
    checkForWin();
    showGameOver(gameOver);
}


function changeCurrentShape(id) {
    if(!fields[id] && !gameOver) {
        if(currentShape == 'cross') {
            fields[id] = 'cross';
            currentShape = 'circle';
        } else {
            fields[id] = 'circle';
            currentShape = 'cross'
        }
        currentPlayer(currentShape);
    }
}

// ########## CURRENT PLAYER ##########
function currentPlayer(shape) {
    if (shape == 'cross') {
        document.getElementById(`player-cross`).classList.remove('player-inactive');
        document.getElementById(`player-circle`).classList.add('player-inactive');
    } else {
        document.getElementById(`player-circle`).classList.remove('player-inactive');
        document.getElementById(`player-cross`).classList.add('player-inactive');
    }
}

// ########## DRAW SHAPE ##########
function draw() {
    for (let i = 0; i < 9; i++) {
        if(fields[i] == 'cross') {
            document.getElementById('cross-'+`${i}`).classList.remove('d-none');
        }
        else if(fields[i] == 'circle') {
            document.getElementById('circle-'+`${i}`).classList.remove('d-none');
        }
        
    }
}

// ########## LINES ##########
function checkForWin() {
    renderHorizontalLines();
    renderVerticalLines();
    renderDiagonalLines();
    fullField();
}


function renderHorizontalLines() {
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        document.getElementById('line-1').style.transform = 'scaleX(1)';
        gameOver = true;
    }
    else if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        document.getElementById('line-2').style.transform = 'scaleX(1)';
        gameOver = true;
    }
    else if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        document.getElementById('line-3').style.transform = 'scaleX(1)';
        gameOver = true;
    }
}


function renderVerticalLines() {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
        gameOver = true;
    }
    else if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
        gameOver = true;
    }
    else if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
        gameOver = true;
    }
}


function renderDiagonalLines() {
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1.2)';
        gameOver = true;
    }
    else if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        document.getElementById('line-8').style.transform = 'rotate(45deg) scaleX(1.2)';
        gameOver = true;
    }
}


function fullField() {
    if(fields[0]&&fields[1]&&fields[2]&&fields[3]&&fields[4]&&fields[5]&&fields[6]&&fields[7]&&fields[8]) {
        gameOver = true;
    }
}

// ########## GAME OVER ##########
function showGameOver(x) {
    if(x) {
        AUDIO_GAMEOVER.play();
        setTimeout(function() {
            document.getElementById('game-over').style.transform = 'scaleX(1)';
            document.getElementById('game-over').style.opacity = '1';
        },2000)
        showButton();
    } 
}


function showButton() {
    setTimeout(function() {
        document.getElementById('restart-btn').style.transform = 'translateY(26rem) translateX(-33rem)';
    },2000)
}

// ########## RESTART ##########
function restart() {
    AUDIO_RESTART.play();
    gameOver = false;
    document.getElementById('game-over').style.transform = 'scaleX(0.0)';
    document.getElementById('game-over').style.opacity = '0';
    document.getElementById('restart-btn').style.transform = 'translateY(-550px) translateX(-33rem)';
    cleanFields();
}


function cleanFields() {
    fields = [];
    for (let i = 0; i < 9; i++) {
        document.getElementById('cross-'+`${i}`).classList.add('d-none');
        document.getElementById('circle-'+`${i}`).classList.add('d-none');
    }
    cleanLines();
}


function cleanLines() {
    for (let i = 1; i < 4; i++) {
        document.getElementById(`line-${i}`).style.transform = 'scaleX(0.0)';
    }
    for (let i = 4; i < 7; i++) {
        document.getElementById(`line-${i}`).style.transform = 'rotate(90deg) scaleX(0.0)';
    }
    document.getElementById(`line-7`).style.transform = 'rotate(-45deg) scaleX(0.0)';
    document.getElementById(`line-8`).style.transform = 'rotate(45deg) scaleX(0.0)';
}