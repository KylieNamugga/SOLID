class A{}

// All these classes below represent coupling.

class B{
    // This is coupling through composition
    a = new A()
}

class C extends B{
    // This is coupling through inheritance
}

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

class Computer{
    // data
    memory:Array<any> = [];
    // methods
    input(){
        // composition
        let inputMethod = new inputDataFromKeyBoard
        inputMethod.inputDataFromKeyBoard("data")
    }

    store(data:any){
        // Delegate
        let inMemory = new InMemory
        inMemory.store(data);
    }

    // storeDataToInMemory(data:any){
    //     this.memory.push(data)
    //     console.log(data)
    // }

    retrive(data:any){
        let inMemory = new InMemory()
        return inMemory
    }

    process(data:any){
        let processor = new CPU()
        processor.process(data)
    }

    display(data:any){
    let monitor = new Monitor()
    monitor.display(data)

    }

    handleError(error:any){
        let errorhandler = new ErrorHandler()
        errorhandler.handleError(error)
    }
}

// Test
let computer = new Computer()
// computer.inputDataFromKeyBoard("row data");


// Creating a class to input from keyboard to handle inputing data from the keyboard
// It conforms to Single Responsibility Principle
class inputDataFromKeyBoard{
    // Data

    // Method
    inputDataFromKeyBoard(data:any){
        console.log(data);
    }
}

// Class to handle memory
class InMemory{
memory:Array<any> = [];

store(data:any){
    this.memory.push(data)
}

// we are storing and retriving from the same 
// memory so we can have another method called retrieve

retrieve(){
    return this.memory
}
}

// Class to handle Processing
class CPU{
    process(data:string){
        let information = "Processed: " + data 
        return information
    }
}

// class to handle monitor display
class Monitor{
    display(data:any){
       console.log("Display: " + data )
    }
}

// To handle Error
class ErrorHandler{
    handleError(error:any){
        console.log("Error: " + error)
    }
}