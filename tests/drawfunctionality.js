// const checkWin = (board) => {
// 	// Check rows
// 	for (let i = 0; i < 3; i++) {
// 		if (
// 			board[i][0] &&
// 			board[i][0] === board[i][1] &&
// 			board[i][0] === board[i][2]
// 		) {
// 			return board[i][0]; // Return the winning player ("X" or "O")
// 		} else if (
// 			// Check columns
// 			board[0][i] &&
// 			board[0][i] === board[1][i] &&
// 			board[0][i] === board[2][i]
// 		) {
// 			return board[0][i]; // Return the winning player ("X" or "O")
// 		} else if (
// 			// checks diagonal win
// 			board[0][0] &&
// 			board[0][0] === board[1][1] &&
// 			board[0][0] === board[2][2]
// 		) {
// 			return board[0][0]; // Return the winning player ("X" or "O")
// 		} else if (
// 			// checks diagonal win
// 			board[0][2] &&
// 			board[0][2] === board[1][1] &&
// 			board[0][2] === board[2][0]
// 		) {
// 			return board[0][2]; // Return the winning player ("X" or "O")
// 		} else {
// 				// No winner
// 				return null
// 		}
// 	}
// };
	


// const checkDraw = (board) => {
// 	for (let i = 0; i < 3; i++) {
// 		if (
// 			// Check rows
// 			board[i][i] === "X" ||
// 			board[i][i] === "0"
// 		) {
// 			return board[i][i]; // Return the winning player ("X" or "O")
// 		} 
// 	}
// 	console.log(board[0][0]);

// }

// const checkWin = (board) => {
// 	// Check rows
// 	for (let i = 0; i < 3; i++) {
// 		if (
// 			board[i][0] &&
// 			board[i][0] === board[i][1] &&
// 			board[i][0] === board[i][2]
// 		) {
// 			return board[i][0]; // Return the winning player ("X" or "O")
// 		}
// 	}

// 	// Check columns
// 	for (let i = 0; i < 3; i++) {
// 		if (
// 			board[0][i] &&
// 			board[0][i] === board[1][i] &&
// 			board[0][i] === board[2][i]
// 		) {
// 			return board[0][i]; // Return the winning player ("X" or "O")
// 		}
// 	}

// 	// Check diagonals
// 	if (
// 		board[0][0] &&
// 		board[0][0] === board[1][1] &&
// 		board[0][0] === board[2][2]
// 	) {
// 		return board[0][0]; // Return the winning player ("X" or "O")
// 	}
// 	if (
// 		board[0][2] &&
// 		board[0][2] === board[1][1] &&
// 		board[0][2] === board[2][0]
// 	) {
// 		return board[0][2]; // Return the winning player ("X" or "O")
// 	}

// 	// No winner
// 	return null
// };
