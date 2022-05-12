/*
We are designing a COMPUTER
-inputs data through keyboard
-stores data to in-memory
-retrives data from in-memory
-displaying information on a monitor
-Handles errors and exceptions
*/
// Creating Computer by using class computer
// Under Single Responsibility Princple, it's stated that
// A class should have only one reason for change.
var Computer = /** @class */ (function () {
    function Computer() {
        // data
        this.memory = [];
    }
    // methods
    Computer.prototype.input = function () {
        // composition
        var inputMethod = new inputDataFromKeyBoard;
        inputMethod.inputDataFromKeyBoard("data");
    };
    Computer.prototype.store = function (data) {
        // Delegate
        var inMemory = new InMemory;
        inMemory.store(data);
    };
    // storeDataToInMemory(data:any){
    //     this.memory.push(data)
    //     console.log(data)
    // }
    Computer.prototype.retrive = function (data) {
        var inMemory = new InMemory();
        return inMemory;
    };
    Computer.prototype.process = function (data) {
        var processor = new CPU();
        processor.process(data);
    };
    Computer.prototype.display = function (data) {
        var monitor = new Monitor();
        monitor.display(data);
    };
    Computer.prototype.handleError = function (error) {
        var errorhandler = new ErrorHandler();
        errorhandler.handleError(error);
    };
    return Computer;
}());
// Test
var computer = new Computer();
// computer.inputDataFromKeyBoard("row data");
// Creating a class to input from keyboard to handle inputing data from the keyboard
// It conforms to Single Responsibility Principle
var inputDataFromKeyBoard = /** @class */ (function () {
    function inputDataFromKeyBoard() {
    }
    // Data
    // Method
    inputDataFromKeyBoard.prototype.inputDataFromKeyBoard = function (data) {
        console.log(data);
    };
    return inputDataFromKeyBoard;
}());
// Class to handle memory
var InMemory = /** @class */ (function () {
    function InMemory() {
        this.memory = [];
    }
    InMemory.prototype.store = function (data) {
        this.memory.push(data);
    };
    // we are storing and retriving from the same 
    // memory so we can have another method called retrieve
    InMemory.prototype.retrieve = function () {
        return this.memory;
    };
    return InMemory;
}());
// Class to handle Processing
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.process = function (data) {
        var information = "Processed: " + data;
        return information;
    };
    return CPU;
}());
// class to handle monitor display
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.display = function (data) {
        console.log("Display: " + data);
    };
    return Monitor;
}());
// To handle Error
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (error) {
        console.log("Error: " + error);
    };
    return ErrorHandler;
}());
