/*
 * Rotate clockwise then top and bottom
 *
 * */

require('colors');
var CommonFiveStepAlgorithm = require("./src/dependents/algorithm/CommonFiveStep");
var RubikCube = require("./src/dependents/rubikCube/RubikCube");
var PieceColor = require("./src/dependents/rubikCube/PieceColor");
var RubikCubeSolver = require("./src/RubikCubeSolver");


var algorithm = new CommonFiveStepAlgorithm();

//Todo build rubik cube here
var rubikCube = new RubikCube([
    PieceColor.RED, PieceColor.RED, PieceColor.ORANGE, PieceColor.WHITE, PieceColor.BLUE, PieceColor.RED, PieceColor.RED, PieceColor.GREEN, PieceColor.GREEN,
    PieceColor.BLUE, PieceColor.GREEN, PieceColor.GREEN, PieceColor.BLUE, PieceColor.ORANGE, PieceColor.YELLOW, PieceColor.WHITE, PieceColor.BLUE, PieceColor.BLUE,
    PieceColor.WHITE, PieceColor.GREEN, PieceColor.RED, PieceColor.RED, PieceColor.GREEN, PieceColor.GREEN, PieceColor.WHITE, PieceColor.BLUE, PieceColor.YELLOW,
    PieceColor.BLUE, PieceColor.YELLOW, PieceColor.BLUE, PieceColor.WHITE, PieceColor.RED, PieceColor.BLUE, PieceColor.ORANGE, PieceColor.WHITE, PieceColor.GREEN,
    PieceColor.WHITE, PieceColor.YELLOW, PieceColor.ORANGE, PieceColor.ORANGE, PieceColor.WHITE, PieceColor.RED, PieceColor.YELLOW, PieceColor.WHITE, PieceColor.YELLOW,
    PieceColor.YELLOW, PieceColor.ORANGE, PieceColor.RED, PieceColor.ORANGE, PieceColor.YELLOW, PieceColor.ORANGE, PieceColor.GREEN, PieceColor.YELLOW, PieceColor.ORANGE
]);

var rubikCubeSolver = new RubikCubeSolver();
rubikCubeSolver.setAlgorithm(algorithm);
rubikCubeSolver.setRubikCube(rubikCube);
rubikCubeSolver.solve();







//fswebcam --save /home/kushal/yo.jpg  -r 640x480 -S 10 --flip h --jpeg 95 --set Brightness=-120
