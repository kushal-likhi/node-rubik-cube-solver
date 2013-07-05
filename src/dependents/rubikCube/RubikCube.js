exports = module.exports = function (structure) {
    var _this = this;
    var PieceColor = require("./PieceColor");
    var MoveType = require("./MoveType");
    var RubikCubeSide = require("./RubikCubeSide");
    var side1, side2, side3, side4, side5, side6;

    function countPiecesByColor(color) {
        var count = 0;
        for (var i in structure) {
            if (structure.hasOwnProperty(i) && structure[i] == color) count++;
        }
        return count;
    }

    function checkCube() {
        if (countPiecesByColor(PieceColor.BLUE) != 9) throw "Invalid number of " + PieceColor.BLUE + " pieces";
        if (countPiecesByColor(PieceColor.GREEN) != 9) throw "Invalid number of " + PieceColor.GREEN + " pieces";
        if (countPiecesByColor(PieceColor.ORANGE) != 9) throw "Invalid number of " + PieceColor.ORANGE + " pieces";
        if (countPiecesByColor(PieceColor.RED) != 9) throw "Invalid number of " + PieceColor.RED + " pieces";
        if (countPiecesByColor(PieceColor.WHITE) != 9) throw "Invalid number of " + PieceColor.WHITE + " pieces";
        if (countPiecesByColor(PieceColor.YELLOW) != 9) throw "Invalid number of " + PieceColor.YELLOW + " pieces";
    }

    function constructSides() {
        try {
            checkCube();
        } catch (message) {
            console.log(message);
            process.exit(1);
        }
        side1 = new RubikCubeSide(
            structure[0], structure[1], structure[2],
            structure[3], structure[4], structure[5],
            structure[6], structure[7], structure[8]
        );
        side2 = new RubikCubeSide(
            structure[9], structure[10], structure[11],
            structure[12], structure[13], structure[14],
            structure[15], structure[16], structure[17]
        );
        side3 = new RubikCubeSide(
            structure[18], structure[19], structure[20],
            structure[21], structure[22], structure[23],
            structure[24], structure[25], structure[26]
        );
        side4 = new RubikCubeSide(
            structure[27], structure[28], structure[29],
            structure[30], structure[31], structure[32],
            structure[33], structure[34], structure[35]
        );
        side5 = new RubikCubeSide(
            structure[36], structure[37], structure[38],
            structure[39], structure[40], structure[41],
            structure[42], structure[43], structure[44]
        );
        side6 = new RubikCubeSide(
            structure[45], structure[46], structure[47],
            structure[48], structure[49], structure[50],
            structure[51], structure[52], structure[53]
        );
    }

    this.printCube = function () {
        function getPrintSegment(color) {
            var segment = "  ";
            switch (color) {
                case PieceColor.BLUE:
                    return segment.blue.bold.inverse;
                    break;
                case PieceColor.GREEN:
                    return segment.green.bold.inverse;
                    break;
                case PieceColor.ORANGE:
                    return segment.magenta.bold.inverse;
                    break;
                case PieceColor.RED:
                    return segment.red.bold.inverse;
                    break;
                case PieceColor.WHITE:
                    return segment.white.bold.inverse;
                    break;
                case PieceColor.YELLOW:
                    return segment.yellow.bold.inverse;
                    break;
                default:
                    return segment.black.bold.inverse;
            }
        }

        console.log("\n------STATE AT " + new Date().getTime() + "------");
        for (var i = 36; i <= 44; i += 3) process.stdout.write(" " + getPrintSegment(structure[i]) + getPrintSegment(structure[i + 1]) + getPrintSegment(structure[i + 2]) + "\n");
        console.log(" ");
        for (i = 0; i <= 8; i += 3) process.stdout.write(" " +
            getPrintSegment(structure[i]) + getPrintSegment(structure[i + 1]) + getPrintSegment(structure[i + 2]) + " " +
            getPrintSegment(structure[i + 9]) + getPrintSegment(structure[i + 10]) + getPrintSegment(structure[i + 11]) + " " +
            getPrintSegment(structure[i + 18]) + getPrintSegment(structure[i + 19]) + getPrintSegment(structure[i + 20]) + " " +
            getPrintSegment(structure[i + 27]) + getPrintSegment(structure[i + 28]) + getPrintSegment(structure[i + 29]) + "\n"
        );
        console.log(" ");
        for (i = 45; i <= 53; i += 3) process.stdout.write(" " + getPrintSegment(structure[i]) + getPrintSegment(structure[i + 1]) + getPrintSegment(structure[i + 2]) + "\n");
    };
    function swapPieces() {
        function swap(i1, i2) {
            var temp = String(structure[i1]);
            structure[i1] = String(structure[i2]);
            structure[i2] = temp;
        }

        for (var index in arguments) {
            if (arguments.hasOwnProperty(index)) swap(arguments[index][0], arguments[index][1]);
        }
    }

    this.doMove = function (moveType) {
        switch (moveType) {
            case MoveType.S1:
                swapPieces([0, 2], [0, 8], [0, 6], [1, 5], [1, 7], [1, 3]);
                swapPieces([42, 9], [42, 47], [42, 35], [43, 12], [43, 46], [43, 32], [44, 15], [44, 45], [44, 29]);
                break;
            case MoveType.S1_INVERSE:
                swapPieces([0, 6], [0, 8], [0, 2], [1, 3], [1, 7], [1, 5]);
                swapPieces([42, 35], [42, 47], [42, 9], [43, 32], [43, 46], [43, 12], [44, 29], [44, 45], [44, 15]);
                break;
            case MoveType.S2:
                swapPieces([9, 11], [9, 17], [9, 15], [10, 14], [10, 16], [10, 12]);
                swapPieces([44, 18], [44, 53], [44, 8], [41, 21], [41, 50], [41, 5], [38, 24], [38, 47], [38, 2]);
                break;
            case MoveType.S2_INVERSE:
                swapPieces([9, 15], [9, 17], [9, 11], [10, 12], [10, 16], [10, 14]);
                swapPieces([44, 8], [44, 53], [44, 18], [41, 5], [41, 50], [41, 21], [38, 2], [38, 47], [38, 24]);
                break;
            case MoveType.S3:
                swapPieces([18, 20], [18, 26], [18, 24], [19, 23], [19, 25], [19, 21]);
                swapPieces([38, 27], [38, 51], [38, 17], [37, 30], [37, 52], [37, 14], [36, 33], [36, 53], [36, 11]);
                break;
            case MoveType.S3_INVERSE:
                swapPieces([18, 24], [18, 26], [18, 20], [19, 21], [19, 25], [19, 23]);
                swapPieces([38, 17], [38, 51], [38, 27], [37, 14], [37, 52], [37, 30], [36, 11], [36, 53], [36, 33]);
                break;
            case MoveType.S4:
                swapPieces([27, 29], [27, 35], [27, 33], [28, 32], [28, 34], [28, 30]);
                swapPieces([36, 0], [36, 45], [36, 26], [39, 3], [39, 48], [39, 23], [42, 6], [42, 51], [42, 20]);
                break;
            case MoveType.S4_INVERSE:
                swapPieces([27, 33], [27, 35], [27, 29], [28, 30], [28, 34], [28, 32]);
                swapPieces([36, 26], [36, 45], [36, 0], [39, 23], [39, 48], [39, 3], [42, 20], [42, 51], [42, 6]);
                break;
            case MoveType.S5:
                swapPieces([36, 38], [36, 44], [36, 42], [37, 41], [37, 43], [37, 39]);
                swapPieces([20, 11], [20, 2], [20, 29], [19, 10], [19, 1], [19, 28], [18, 9], [18, 0], [18, 27]);
                break;
            case MoveType.S5_INVERSE:
                swapPieces([36, 42], [36, 44], [36, 38], [37, 39], [37, 43], [37, 41]);
                swapPieces([20, 29], [20, 2], [20, 11], [19, 28], [19, 1], [19, 10], [18, 27], [18, 0], [18, 9]);
                break;
            case MoveType.S6:
                swapPieces([45, 47], [45, 53], [45, 51], [46, 50], [46, 52], [46, 48]);
                swapPieces([6, 15], [6, 24], [6, 35], [7, 16], [7, 25], [7, 34], [8, 17], [8, 26], [8, 33]);
                break;
            case MoveType.S6_INVERSE:
                swapPieces([45, 51], [45, 53], [45, 47], [46, 48], [46, 52], [46, 50]);
                swapPieces([6, 35], [6, 24], [6, 15], [7, 34], [7, 25], [7, 16], [8, 33], [8, 26], [8, 17]);
                break;
        }
        constructSides();
    };
    constructSides();
};
