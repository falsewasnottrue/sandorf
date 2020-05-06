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

var move = function(color, steps) {
	var currentPosition = findPosition(color);
	$(".piece-" + color).removeClass("piece-" + color);

	var nextPosition = currentPosition + steps;
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