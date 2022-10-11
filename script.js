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

// ########## HORIZONTAL LINES ##########
function renderHorizontalLines() {
    renderLine1();
    renderLine2();
    renderLine3();
}

function renderLine1() {
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        document.getElementById('line-1').classList.add('show-horizontal-line');
        gameOver = true;
    }
}


function renderLine2() {
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        // document.getElementById('line-2').style.transform = 'scaleX(1)';
        document.getElementById('line-2').classList.add('show-horizontal-line');
        gameOver = true;
    }
}


function renderLine3() {
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        document.getElementById('line-3').classList.add('show-horizontal-line');
        gameOver = true;
    }
}

// ########## VERTICAL LINES ##########
function renderVerticalLines() {
    renderLine4();
    renderLine5();
    renderLine6();
}


function renderLine4() {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        // document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
        document.getElementById('line-4').classList.add('show-vertical-line');
        gameOver = true;
    }
}


function renderLine5() {
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        document.getElementById('line-5').classList.add('show-vertical-line');
        gameOver = true;
    }
}


function renderLine6() {
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        document.getElementById('line-6').classList.add('show-vertical-line');
        gameOver = true;
    }
}

// ########## DIAGONAL LINES ##########
function renderDiagonalLines() {
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        // document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1.2)';
        document.getElementById('line-7').classList.add('show-diagonal-line-right');
        gameOver = true;
    }
    else if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        // document.getElementById('line-8').style.transform = 'rotate(45deg) scaleX(1.2)';
        document.getElementById('line-8').classList.add('show-diagonal-line-left');
        gameOver = true;
    }
}

// ########## NO ONE WINS - FIELD FULL ##########
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
        document.getElementById('restart-btn').classList.add('show-restart-btn');
    },2000)
}

// ########## RESTART ##########
function restart() {
    AUDIO_RESTART.play();
    gameOver = false;
    document.getElementById('game-over').style.transform = 'scaleX(0.0)';
    document.getElementById('game-over').style.opacity = '0';
    document.getElementById('restart-btn').classList.remove('show-restart-btn');
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
        // document.getElementById(`line-${i}`).style.transform = 'scaleX(0.0)';
        document.getElementById(`line-${i}`).classList.remove('show-horizontal-line');
    }
    for (let i = 4; i < 7; i++) {
        document.getElementById(`line-${i}`).classList.remove('show-vertical-line');
    }
    // document.getElementById(`line-7`).style.transform = 'rotate(-45deg) scaleX(0.0)';
    document.getElementById(`line-7`).classList.remove('show-diagonal-line-right');
    document.getElementById(`line-8`).classList.remove('show-diagonal-line-left');
}