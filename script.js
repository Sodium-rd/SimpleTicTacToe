var curr = "X";
var game = true;
var grid = [
    ['.' , '.', '.'],
    ['.' , '.', '.'],
    ['.' , '.', '.']
];

function nextTurn() {

    if (curr == "X") {

        curr = "O";
        document.getElementById('player1').style.color ='#DDDDDD';
        document.getElementById('player2').style.color ='#77FF95';

    } else {

        curr = "X";
        document.getElementById('player2').style.color ='#DDDDDD';
        document.getElementById('player1').style.color ='#FF7777';

    }

}

function select(l, c) {

    if ((game == false) || (grid[l - 1][c - 1] != '.')) return;

    document.getElementById("l" + l + "c" + c).innerHTML = curr;

    if (curr == "O") {

        grid[l - 1][c - 1] = "O";
        document.getElementById("l" + l + "c" + c).style.color = '#77FF95';
        document.getElementById("l" + l + "c" + c).style.borderColor = '#77FF95';
        verify("O");

    } else  {

        grid[l - 1][c - 1] = "X";
        document.getElementById("l" + l + "c" + c).style.color = '#FF7777';
        document.getElementById("l" + l + "c" + c).style.borderColor = '#FF7777';
        verify("X");

    }

    if (game == true) nextTurn();
    else 
        if (curr == "X") document.getElementById('player1').style.color ='#FFDF52';
        else document.getElementById('player2').style.color ='#FFDF52';

}

function verify(p) {

    for (let l = 0; l < 3; l++)
        if ((grid[l][0] == p) && (grid[l][1] == p) && (grid[l][2] == p))
            game = false;

    for (let c = 0; c < 3; c++)
        if ((grid[0][c] == p) && (grid[1][c] == p) && (grid[2][c] == p))
            game = false;

    if ((grid[0][0] == p) && (grid[1][1] == p) && (grid[2][2] == p))
        game = false;

    if ((grid[0][2] == p) && (grid[1][1] == p) && (grid[2][0] == p))
        game = false;        

}

function reset() {

    for (let i = 1; i < 4; i++)
        for (let j = 1; j < 4; j++) {
            document.getElementById("l" + i + "c" + j).innerHTML = "";
            document.getElementById("l" + i + "c" + j).style.borderColor = '#DDDDDD';
        }

    document.getElementById('player2').style.color ='#DDDDDD';
    document.getElementById('player1').style.color ='#FF7777';
    curr = "X";
    game = true;
    grid = [
        ['.' , '.', '.'],
        ['.' , '.', '.'],
        ['.' , '.', '.']
    ];

}

window.onload = (event) => {

    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            document.getElementById("l" + i + "c" + j).addEventListener("click", () => {select(i, j)});
        }
    }
    document.getElementById("reset").addEventListener("click", () => {reset()});

};