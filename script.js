let board = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

// for (let [rowIndex, row] of Object.entries(board)) {
// 	for (let [colIndex, col] of Object.entries(row)) {
// 		console.log(rowIndex, colIndex, col);
// 	}
// }

console.log("JS Linked");

// //DOM & JS Variable, JS Data Structure (Array)
// const allButtons = document.getElementsByTagName("button");
// //JS Console & Output
// console.log(allButtons);

// //JS Variable (Global) Scope
// let xPlayersTurn = true;

// //JS For Loop
// for (const button of allButtons) {
// 	//JS Event & JS (Arrow) Function
// 	button.onclick = () => {
// 		//JS Conditional (If statement)
// 		if (button.innerHTML !== "&nbsp;") {
// 			alert("You little cheater");
// 		} else {
// 			//JS Ternary Operator (Inline If Statement)
// 			button.innerHTML = xPlayersTurn ? "X" : "O";
// 			xPlayersTurn = !xPlayersTurn;
// 		}
// 	};
// }

const buttonClicked = (event) => {
	if (event.target.innerHTML !== "&nbsp;") {
		alert("You little cheater");
	} else {
		const rowIndex = event.target.getAttribute("data-rowindex");
		const colIndex = event.target.getAttribute("data-colindex");

		board[rowIndex][colIndex] = xPlayersTurn ? "X" : "O";
		xPlayersTurn = !xPlayersTurn;

		generateBoard();
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
