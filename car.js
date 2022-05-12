/*
-Ignition
-Engine
-Steering
-Suspension
-Gearbox
-BrakeSystem
-Failure
*/
var Ignition = /** @class */ (function () {
    function Ignition() {
    }
    Ignition.prototype.startCar = function (power) {
        console.log("Benz Started with" + power);
    };
    Ignition.prototype.stopCar = function (power) {
        console.log("Benz has stopped" + power);
    };
    return Ignition;
}());
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.moveCar = function () {
        console.log("Engine has started");
    };
    return Engine;
}());
var Steer = /** @class */ (function () {
    function Steer() {
    }
    Steer.prototype.directWheels = function () {
        console.log("wheels have changed direction");
    };
    return Steer;
}());
var Suspension = /** @class */ (function () {
    function Suspension() {
    }
    Suspension.prototype.balanceCar = function () {
        console.log("Car is balanced");
    };
    return Suspension;
}());
var Gearbox = /** @class */ (function () {
    function Gearbox() {
    }
    Gearbox.prototype.changeGears = function () {
        console.log("Gears shifted");
    };
    return Gearbox;
}());
var Brakes = /** @class */ (function () {
    function Brakes() {
    }
    Brakes.prototype.hardStop = function () {
        console.log("Car has stopped suddenly");
    };
    return Brakes;
}());
var Failure = /** @class */ (function () {
    function Failure() {
    }
    Failure.prototype.owedde = function (failuremessage) {
        console.log("Bambi owedde gwe" + failuremessage);
    };
    return Failure;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    // ignition
    Car.prototype.startCar = function (power) {
        var ignition = new Ignition();
        ignition.startCar(power);
    };
    Car.prototype.stopCar = function (power) {
    };
    // Engiene
    Car.prototype.moveCar = function () {
        var engine = new Engine();
        engine.moveCar();
    };
    // steering
    Car.prototype.directWheels = function () {
        var steer = new Steer();
        steer.directWheels();
    };
    // suspension
    Car.prototype.balanceCar = function () {
        var suspension = new Suspension();
        suspension.balanceCar();
    };
    // Gearbox
    Car.prototype.changeGears = function () {
        var gearbox = new Gearbox();
        gearbox.changeGears();
    };
    // Breaksystem
    Car.prototype.hardstop = function () {
        var brakes = new Brakes();
        brakes.hardStop();
    };
    // Failure
    Car.prototype.owedde = function (failuremessage) {
        var failure = new Failure();
        failure.owedde(failuremessage);
    };
    return Car;
}());
var car = new Car;
car.startCar(200);
