var colors = ["red", "green", "yellow", "black"];

var findPosition = function(color) {
	var pieceName = ".piece-" + color;

	var currentPositionElements = $(pieceName);

	var positions = $(currentPositionElements).attr("class").split(/\s+/).filter(clazz => clazz.startsWith(color + "-"));

	// parse position
	if (positions && positions.length == 1) {
		var currentPositionName = positions[0];
		var currentPosition = parseInt(currentPositionName.substring((color + "-").length), 10);

		return currentPosition;
	} else {
		return 0;
	}
}

var singleMove = function(move) {
	var color = move.color;
	var steps = move.steps;

	var currentPosition = findPosition(color);
	var nextPosition = currentPosition + steps;

	if (nextPosition <= 43) {
		$(".piece-" + color).removeClass("piece-" + color);
		var nextPositionElement = $("." + color + "-" + nextPosition)

		// move marker
		nextPositionElement.addClass("piece-" + color);

		// remove other pieces
		var otherColors = colors.filter(c => c != color)
		otherColors.forEach(otherColor => {
			if (nextPositionElement.hasClass("piece-" + otherColor)) {
				nextPositionElement.removeClass("piece-" + otherColor);
				$("." + otherColor + "-0").addClass("piece-" + otherColor);
			}
		});
	}
}

var sortedByBYGR = function() {
	var yellowMoves = moves.filter(m => m.color == "yellow").reverse();
	var blackMoves = moves.filter(m => m.color == "black").reverse();
	var redMoves = moves.filter(m => m.color == "red").reverse();
	var greenMoves = moves.filter(m => m.color == "green").reverse();


	var game = {
		"turn": "black",
		
		"red": { "moves": redMoves, "next": "black" },
		"yellow": { "moves": yellowMoves, "next": "green" },
		"black": { "moves": blackMoves, "next": "yellow" },
		"green": { "moves": greenMoves, "next": "red" },
	}

	return game;
}

var sortedByRYBG = function() {
	var yellowMoves = moves.filter(m => m.color == "yellow").reverse();
	var blackMoves = moves.filter(m => m.color == "black").reverse();
	var redMoves = moves.filter(m => m.color == "red").reverse();
	var greenMoves = moves.filter(m => m.color == "green").reverse();


	var game = {
		"turn": "red",
		
		"red": { "moves": redMoves, "next": "yellow" },
		"yellow": { "moves": yellowMoves, "next": "black" },
		"black": { "moves": blackMoves, "next": "green" },
		"green": { "moves": greenMoves, "next": "red" },
	}

	return game;
}


var nextMove = function(game) {
	if (game.red.moves.length == 0 && game.yellow.moves.length == 0 && game.black.moves.length == 0 && game.green.moves.length == 0) {
		// no more moves
		return;
	}

	var next = game[game.turn].moves.pop();
	while (!next) {
		game.turn = game[game.turn].next;
		next = game[game.turn].moves.pop();
	}

	return next;
}

var replay = function(game) {
	var move = nextMove(game);

	while (move) {
		singleMove(move);
		if (move.steps != 6) {
			game.turn = game[game.turn].next;
		}
		move = nextMove(game);
	}
}

var replaySimple = function() {
	moves.forEach(move => singleMove(move));
}

var init = function() {
	$(".piece-black").removeClass("piece-black");
	$(".piece-red").removeClass("piece-red");
	$(".piece-yellow").removeClass("piece-yellow");
	$(".piece-green").removeClass("piece-green");

	$(".black-0").addClass("piece-black");
	$(".red-0").addClass("piece-red");
	$(".yellow-0").addClass("piece-yellow");
	$(".green-0").addClass("piece-green");
}

var sorted = function(first, second, third, fourth) {
	var movesByColor = {
		"yellow" : moves.filter(m => m.color == "yellow").reverse(),
		"black" : moves.filter(m => m.color == "black").reverse(),
		"red" : moves.filter(m => m.color == "red").reverse(),
		"green" : moves.filter(m => m.color == "green").reverse()
	}

	var game = {
		"turn": first,
	};
	game[first] = { "moves": movesByColor[first], "next": second };
	game[second] = { "moves": movesByColor[second], "next": third };
	game[third] = { "moves": movesByColor[third], "next": fourth };
	game[fourth] = { "moves": movesByColor[fourth], "next": first };

	return game;
}

var moves = [
  // {"color": "black", "steps": 1},	// 1
  // {"color": "yellow", "steps": 1},	// 2
  // {"color": "green", "steps": 1},		// 3
  // {"color": "red", "steps": 1},	// 4

  {"color": "yellow", "steps": 2},	// 1
  {"color": "green", "steps": 3},	// 2
  {"color": "red", "steps": 6},		// 3
  {"color": "black", "steps": 5},	// 4

  {"color": "red", "steps": 3},		// 5
  {"color": "red", "steps": 2},		// 6
  {"color": "red", "steps": 5},		// 7
  {"color": "black", "steps": 2},	// 8
  {"color": "black", "steps": 6},	// 9
  {"color": "black", "steps": 3},	// 10
  {"color": "yellow", "steps": 5},	// 11
  {"color": "yellow", "steps": 5},	// 12
  {"color": "yellow", "steps": 4},	// 13
  {"color": "green", "steps": 6},	// 14

  {"color": "green", "steps": 4},	// 15
  {"color": "red", "steps": 6},		// 16
  {"color": "red", "steps": 6},		// 17
  {"color": "red", "steps": 3},		// 18
  {"color": "black", "steps": 5},	// 19
  {"color": "yellow", "steps": 3},	// 20
  {"color": "yellow", "steps": 3},	// 21
  {"color": "yellow", "steps": 1},	// 22
  {"color": "green", "steps": 4},	// 23
  {"color": "red", "steps": 3},		// 24
  {"color": "black", "steps": 2},	// 25
  {"color": "yellow", "steps": 4},	// 26
  {"color": "yellow", "steps": 5},	// 27
  {"color": "yellow", "steps": 6},	// 28

  {"color": "yellow", "steps": 5},	// 29
  {"color": "green", "steps": 5},	// 30
  {"color": "red", "steps": 1},		// 31
  {"color": "black", "steps": 3},	// 32
  {"color": "black", "steps": 4},	// 33
  {"color": "black", "steps": 3},	// 34
  {"color": "yellow", "steps": 6},	// 35
  {"color": "yellow", "steps": 4},	// 36
  {"color": "green", "steps": 1},	// 37
  {"color": "red", "steps": 1},		// 38
  {"color": "black", "steps": 6},	// 39
  {"color": "black", "steps": 6},	// 40
  {"color": "black", "steps": 4},	// 41
  {"color": "yellow", "steps": 1},	// 42
  {"color": "green", "steps": 2},	// 43

  {"color": "red", "steps": 3},		// 44
  {"color": "black", "steps": 5},	// 45
  {"color": "yellow", "steps": 5},	// 46
  {"color": "green", "steps": 1},	// 47
  {"color": "red", "steps": 6},		// 48
  {"color": "red", "steps": 4},		// 49
  {"color": "black", "steps": 2},	// 50
  {"color": "yellow", "steps": 4},	// 51
  {"color": "green", "steps": 1},	// 52
  {"color": "red", "steps": 6},		// 53
  {"color": "red", "steps": 6},		// 54
  {"color": "red", "steps": 5},		// 55
  {"color": "black", "steps": 6},	// 56
  {"color": "black", "steps": 2},	// 57

  {"color": "yellow", "steps": 2},	// 58
  {"color": "green", "steps": 2},	// 59
  {"color": "red", "steps": 6},		// 60
  {"color": "red", "steps": 4},		// 61
  {"color": "black", "steps": 5},	// 62
  {"color": "yellow", "steps": 1},	// 63
  {"color": "green", "steps": 4},	// 64
  {"color": "red", "steps": 5},		// 65
  {"color": "black", "steps": 4},	// 66
  {"color": "yellow", "steps": 5},	// 67
  {"color": "green", "steps": 6},	// 68
  {"color": "green", "steps": 1},	// 69
  {"color": "red", "steps": 6},		// 70
  {"color": "red", "steps": 3}		// 71
];


var test = function() {
	var ms = moves.map(m => m.steps);
	var order = ["black", "yellow", "green", "red"];
	var turn = 0;

	while (ms.length > 0) {
		var move = {"color": order[turn], "steps": ms.shift() };
		singleMove(move);
		console.log(move);
		
		if (move.steps != 6) {
			turn = (turn + 1) % 4;
		}
	}
}