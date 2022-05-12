// Single Responsibility Principle (file calc.ts).
// Dependency Inversation Principle.
// DIP states that high level modules shd not depend.
// on low level modules but both shd depend on Abstraction.
// High level modules hold the policies and low level modules hold implementation.
// The class that depends on another to achieve something is high level module.
// The class thats independent is the low level module.
// We increase cohesion by ensuring that high module classes depend more on themselves.





/*
abstract class InputDevice{
    abstract input(): any
}


class Keyboard extends InputDevice{
    // data

    // method
    inputData(){
        return "data"
    }
}

// Another way to define abstraction is by using Interface
interface InputDevice{
    inputData():any
}
because this is an interface, we do not extend but rather implement

class Keyboard implements InputDevice{
    inputData(){

    }
}
*/