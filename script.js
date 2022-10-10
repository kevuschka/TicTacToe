let fields = [];

let currentShape = 'circle';
let win = 0;

function select(id) {
    changeCurrentShape(id);
    draw();
    checkForWin();
}


function changeCurrentShape(id) {
    if(!fields[id] && !win) {
        if(currentShape == 'cross') {
            fields[id] = 'cross';
            currentShape = 'circle';
        } else {
            fields[id] = 'circle';
            currentShape = 'cross'
        }
        currentPlayer(currentShape);
    } else {

    }
}


function currentPlayer(shape) {
    if (shape == 'cross') {
        document.getElementById(`player-cross`).classList.remove('player-inactive');
        document.getElementById(`player-circle`).classList.add('player-inactive');
    } else {
        document.getElementById(`player-circle`).classList.remove('player-inactive');
        document.getElementById(`player-cross`).classList.add('player-inactive');
    }
}


function showCircle(id) {
    document.getElementById('circle-'+`${id}`).classList.remove('d-none');
}


function showCross(id) {
    document.getElementById('cross-'+`${id}`).classList.remove('d-none');
}


function checkForWin() {
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
    else if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
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
    else if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1.2)';
        gameOver = true;
    }
    else if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        document.getElementById('line-8').style.transform = 'rotate(45deg) scaleX(1.2)';
        gameOver = true;
    }
}





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