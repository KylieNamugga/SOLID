/* 
-Ignition 
-Engine
-Steering
-Suspension 
-Gearbox
-BrakeSystem
-Failure
*/

class Ignition {
    startCar(power:any){
    console.log("Benz Started with" + power);
    }

    stopCar(power:any){
    console.log("Benz has stopped" + power);
    }
}

class Engine{
moveCar(){
    console.log("Engine has started")
}
}

class Steer{
    directWheels(){
        console.log("wheels have changed direction")
    }
}

class Suspension{
    balanceCar(data:string){
        console.log("Car is balanced")
    }
}

class Gearbox{
    changeGears(){
        console.log("Gears shifted")
    }
}

class Brakes{
    hardStop(){
        console.log("Car has stopped suddenly")
    }
}

class Failure{
    owedde(failuremessage:string){
        console.log("Bambi owedde gwe" + failuremessage)
    }
}



class Car{
    // ignition
    startCar(power:any){
    let ignition = new Ignition()
    ignition.startCar(power)
    }

    stopCar(power:any){

    }

    // Engiene
    moveCar(){
        let engine = new Engine();
        engine.moveCar();
    }

    // steering
    directWheels(){
        let steer = new Steer();
        steer.directWheels();
        
    }

    // suspension
    balanceCar(data:string){
        let suspension = new Suspension()
        suspension.balanceCar(data)
        
    }

    // Gearbox
    changeGears(){
        let gearbox = new Gearbox()
        gearbox.changeGears()
        
    }

    // Breaksystem
    hardstop(){
        let brakes = new Brakes()
        brakes.hardStop()
        
    }

    // Failure
    owedde(failuremessage:string){
        let failure = new Failure()
        failure.owedde(failuremessage)
        
    }


}

let car = new Car
car.startCar(200)
car.owedde("no brakes")
car.balanceCar("balanced")
