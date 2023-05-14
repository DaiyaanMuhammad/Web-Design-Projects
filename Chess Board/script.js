function piece(name, entityCode, type, pos) {
	this.name = name;
	this.entityCode = entityCode;
	this.pos = pos;
	this.type = type;
	this.moves = function () {
		if (this.name == "Pawn") {
			if (this.type == "white") {
				return this.pos + 8;
			} else {
				return this.pos - 8;
			}
		}
	};
}

let w_rook_left = new piece("Rook", "&#9814", "white", 0);
let w_rook_right = new piece("Rook", "&#9814", "white", 7);
let w_knight_left = new piece("Knight", "&#9816", "white", 1);
let w_knight_right = new piece("Knight", "&#9816", "white", 6);
let w_bishop_left = new piece("Bishop", "&#9815", "white", 2);
let w_bishop_right = new piece("Bishop", "&#9815", "white", 5);
let w_queen = new piece("Queen", "&#9813", "white", 3);
let w_king = new piece("King", "&#9812", "white", 4);
let w_pawn1 = new piece("Pawn", "&#9817", "white", 8);
let w_pawn2 = new piece("Pawn", "&#9817", "white", 9);
let w_pawn3 = new piece("Pawn", "&#9817", "white", 10);
let w_pawn4 = new piece("Pawn", "&#9817", "white", 11);
let w_pawn5 = new piece("Pawn", "&#9817", "white", 12);
let w_pawn6 = new piece("Pawn", "&#9817", "white", 13);
let w_pawn7 = new piece("Pawn", "&#9817", "white", 14);
let w_pawn8 = new piece("Pawn", "&#9817", "white", 15);

let b_rook_left = new piece("Rook", "&#9820", "black", 56);
let b_rook_right = new piece("Rook", "&#9820", "black", 63);
let b_knight_left = new piece("Knight", "&#9822", "black", 57);
let b_knight_right = new piece("Knight", "&#9822", "black", 62);
let b_bishop_left = new piece("Bishop", "&#9821", "black", 58);
let b_bishop_right = new piece("Bishop", "&#9821", "black", 61);
let b_queen = new piece("Queen", "&#9819", "black", 59);
let b_king = new piece("King", "&#9818", "black", 60);
let b_pawn1 = new piece("Pawn", "&#9823", "black", 48);
let b_pawn2 = new piece("Pawn", "&#9823", "black", 49);
let b_pawn3 = new piece("Pawn", "&#9823", "black", 50);
let b_pawn4 = new piece("Pawn", "&#9823", "black", 51);
let b_pawn5 = new piece("Pawn", "&#9823", "black", 52);
let b_pawn6 = new piece("Pawn", "&#9823", "black", 53);
let b_pawn7 = new piece("Pawn", "&#9823", "black", 54);
let b_pawn8 = new piece("Pawn", "&#9823", "black", 55);

var white_pieces = [
	w_rook_left,
	w_rook_right,
	w_knight_left,
	w_knight_right,
	w_bishop_left,
	w_bishop_right,
	w_queen,
	w_king,
	w_pawn1,
	w_pawn2,
	w_pawn3,
	w_pawn4,
	w_pawn5,
	w_pawn6,
	w_pawn7,
	w_pawn8
];

var black_pieces = [
	b_rook_left,
	b_rook_right,
	b_knight_left,
	b_knight_right,
	b_bishop_left,
	b_bishop_right,
	b_queen,
	b_king,
	b_pawn1,
	b_pawn2,
	b_pawn3,
	b_pawn4,
	b_pawn5,
	b_pawn6,
	b_pawn7,
	b_pawn8
];

function drawWhites() {
	for (let i = 0; i < white_pieces.length; i++) {
		let p = white_pieces[i];
		document.getElementById(p.pos).innerHTML =
			'<span class="piece">' + p.entityCode + "</span>";
	}
}

function drawBlacks() {
	for (let i = 0; i < black_pieces.length; i++) {
		let p = black_pieces[i];
		document.getElementById(p.pos).innerHTML =
			'<span class="piece">' + p.entityCode + "</span>";
	}
}

function showMoves(piece) {
	document.getElementById(piece.moves()).innerHTML =
		'<span class="piece">&#9900</span>';
}
drawBlacks();
drawWhites();

// showMoves(white_pieces[12]);

for (let i = 0; i < white_pieces.length; i++) {
	let p = white_pieces[i];
	showMoves(p);
}

