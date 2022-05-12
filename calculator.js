// We are going to design a Calculator that executes
// Addition
// Division
// Multiplication
// Subtraction
var calculator = /** @class */ (function () {
    function calculator() {
        // Data
        this.interface = [];
    }
    // methods
    calculator.prototype.addition = function (data) {
        this.interface.push(data);
        console.log(data);
    };
    calculator.prototype.division = function (data) {
        this.interface.push(data);
        console.log(data);
    };
    calculator.prototype.multiplication = function (data) {
        this.interface.push(data);
        console.log(data);
    };
    calculator.prototype.subtraction = function (data) {
        this.interface.push(data);
        console.log(data);
    };
    return calculator;
}());
// Testing our calculator
var Calculator = new calculator();
Calculator.addition("I can help you add");
Calculator.division("I can help you divide");
Calculator.multiplication("I can help you multiply");
Calculator.subtraction("I can help you subtract");
// The Calculator above does not follow SINGLE RESPONSIBILITY FUNCTION
// so, I will break the tasks down to a single class
var calc = /** @class */ (function () {
    function calc() {
        // Data
        this.interface = [];
    }
    // methods
    calc.prototype.add = function () {
        var additionMethod = new addition;
        additionMethod.add("data");
    };
    calc.prototype.divide = function () {
        var divisionMethod = new division;
        divisionMethod.divide("data");
    };
    calc.prototype.multiply = function () {
        var multiplicationMethod = new multiplication;
        multiplicationMethod.multiply("data");
    };
    calc.prototype.subtract = function () {
        var subtractionMethod = new subtraction;
        subtractionMethod.subtract("data");
    };
    return calc;
}());
var Calc = new calc;
// This class will handle addition
var addition = /** @class */ (function () {
    function addition() {
    }
    // method
    addition.prototype.add = function (data) {
        console.log(data);
    };
    return addition;
}());
// This class will handle division
var division = /** @class */ (function () {
    function division() {
    }
    // method
    division.prototype.divide = function (data) {
        console.log(data);
    };
    return division;
}());
// This class will handle multiplication
var multiplication = /** @class */ (function () {
    function multiplication() {
    }
    // method
    multiplication.prototype.multiply = function (data) {
        console.log(data);
    };
    return multiplication;
}());
// This class will handle subtraction
var subtraction = /** @class */ (function () {
    function subtraction() {
    }
    // method
    subtraction.prototype.subtract = function (data) {
        console.log(data);
    };
    return subtraction;
}());
