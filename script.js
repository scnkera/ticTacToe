let board = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

let resetBoard = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

console.log("JS Linked");


let xPlayersTurn = true;

const buttonClicked = (event) => {
	if (event.target.innerHTML !== "&nbsp;") {
		alert("That spot is taken. Please try again!");
	} else {
		const rowIndex = event.target.getAttribute("data-rowIndex");
		const colIndex = event.target.getAttribute("data-colIndex");

		board[rowIndex][colIndex] = xPlayersTurn ? "X" : "O";
		xPlayersTurn = !xPlayersTurn;

		generateBoard();

		const winner = checkWin(board);
		if (winner) {
            setTimeout(()=>{
                alert(winner + " has won!");
                resetBoard();
            }, 250);
		}

		// Future edits; add a game draw functionality
		// console.log(board[0][0]);
		// const draw = checkDraw(board);
		// if (draw) {
        //     setTimeout(()=>{
        //         alert("It's a draw!");
        //         resetBoard();
        //     }, 250);
		// }
	}
};

const generateBoard = () => {
	let generatedHTML = "";
	for (const [rowIndex, row] of Object.entries(board)) {
		generatedHTML += "<div>";
		for (const [colIndex, col] of Object.entries(row)) {
			generatedHTML += `<button 
			onclick="buttonClicked(event)"
			data-rowIndex="${rowIndex}"
			data-colIndex="${colIndex}"
			>${col || "&nbsp;"}</button>`;
		}

		generatedHTML += "</div>";
	}
	console.log("Setting HTML");
	document.getElementById("board").innerHTML = generatedHTML;
};

generateBoard();

const checkWin = (board) => {
	// Check rows
	for (let i = 0; i < 3; i++) {
		if (
			// Checks for a row win
			board[i][0] &&
			board[i][0] === board[i][1] &&
			board[i][0] === board[i][2]
		) {
			return board[i][0]; // Return the winning player ("X" or "O")
		} else if (
			// Checks for column win
			board[0][i] &&
			board[0][i] === board[1][i] &&
			board[0][i] === board[2][i]
		) {
			return board[0][i]; // Return the winning player ("X" or "O")
		} else if (
			// checks for a diagonal win
			board[0][0] &&
			board[0][0] === board[1][1] &&
			board[0][0] === board[2][2]
		) {
			return board[0][0]; // Return the winning player ("X" or "O")
		}
		else if (
			// checks for a diagonal win
			board[0][2] &&
			board[0][2] === board[1][1] &&
			board[0][2] === board[2][0]
		) {
			return board[0][2]; // Return the winning player ("X" or "O")
		} else {
				// No winner
				return null
		}
	}
};
