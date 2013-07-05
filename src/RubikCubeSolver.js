function RubikCubeSolver(){
    this.rubikCube = null;
    this.algorithm = null;
    this.movements = [];
}

RubikCubeSolver.prototype.setRubikCube = function(rubikCube){
    this.rubikCube = rubikCube;
};

RubikCubeSolver.prototype.setAlgorithm = function(algorithm){
    this.algorithm = algorithm;
};

RubikCubeSolver.prototype.solve = function(){
    this.rubikCube.printCube();
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S1_INVERSE);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S1);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S2_INVERSE);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S2);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S3_INVERSE);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S3);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S4_INVERSE);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S4);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S5_INVERSE);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S5);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S6_INVERSE);
    this.rubikCube.doMove(require("./dependents/rubikCube/MoveType").S6);
    this.rubikCube.printCube();
};

exports = module.exports = RubikCubeSolver;