let board = document.getElementById("board");

// Create board cells without numbers
for(let i = 100; i >= 1; i--){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = "cell" + i;
    // Removed innerText since numbers are in the picture
    board.appendChild(cell);
}

let player1 = 0;
let player2 = 0;
let currentPlayer = 1;

let snakes = {
    27: 1,
    21: 9,
    17: 4,
    19: 7
};

let ladders = {
    3: 22,
    5: 8,
    11: 26,
    20: 29
};

function rollDice(){
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = "Dice: " + dice;

    if(currentPlayer === 1){
        player1 += dice;
        if(player1 > 100) player1 -= dice;

        if(ladders[player1]) player1 = ladders[player1];
        if(snakes[player1]) player1 = snakes[player1];

        if(player1 === 100){
            alert("Player 1 Wins!");
        }

        currentPlayer = 2;
    } else {
        player2 += dice;
        if(player2 > 100) player2 -= dice;

        if(ladders[player2]) player2 = ladders[player2];
        if(snakes[player2]) player2 = snakes[player2];

        if(player2 === 100){
            alert("Player 2 Wins!");
        }

        currentPlayer = 1;
    }

    updatePlayers();
}

function updatePlayers(){
    // Remove previous player markers
    document.querySelectorAll(".player1").forEach(e => e.remove());
    document.querySelectorAll(".player2").forEach(e => e.remove());

    let p1 = document.createElement("div");
    p1.classList.add("player","player1");
    p1.innerText = "1";

    let p2 = document.createElement("div");
    p2.classList.add("player","player2");
    p2.innerText = "2";

    if(player1 > 0)
        document.getElementById("cell" + player1).appendChild(p1);
    if(player2 > 0)
        document.getElementById("cell" + player2).appendChild(p2);

    document.getElementById("p1pos").innerText = "Player 1 Position: " + player1;
    document.getElementById("p2pos").innerText = "Player 2 Position: " + player2;

    document.getElementById("turn").innerText = "Turn: Player " + currentPlayer;
}
let gameOver = false; // Add this at the top, after currentPlayer

function rollDice(){
    if(gameOver) return; // Stop rolling if game ended

    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = "Dice: " + dice;

    if(currentPlayer === 1){
        player1 += dice;
        if(player1 > 100) player1 -= dice;

        if(ladders[player1]) player1 = ladders[player1];
        if(snakes[player1]) player1 = snakes[player1];

        if(player1 === 100){
            alert("Player 1 Wins!");
            gameOver = true;                     // <-- Stop game
            document.getElementById("turn").innerText = "Game Over"; // show game over
        }

        currentPlayer = 2;
    } else {
        player2 += dice;
        if(player2 > 100) player2 -= dice;

        if(ladders[player2]) player2 = ladders[player2];
        if(snakes[player2]) player2 = snakes[player2];

        if(player2 === 100){
            alert("Player 2 Wins!");
            gameOver = true;                     // <-- Stop game
            document.getElementById("turn").innerText = "Game Over"; // show game over
        }

        currentPlayer = 1;
    }

    updatePlayers();
}