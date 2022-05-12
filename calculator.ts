// We are going to design a Calculator that executes
// Addition
// Division
// Multiplication
// Subtraction

class calculator{
    // Data
    interface:Array<any> = []

    // methods
    addition(data:any){
        this.interface.push(data)
        console.log(data)
    }

    division(data:any){
        this.interface.push(data)
        console.log(data)
    }

    multiplication(data:any){
        this.interface.push(data)
        console.log(data)
    }

    subtraction(data:any){
        this.interface.push(data)
        console.log(data)
    }

}

// Testing our calculator
let Calculator = new calculator()
Calculator.addition("I can help you add")
Calculator.division("I can help you divide")
Calculator.multiplication("I can help you multiply")
Calculator.subtraction("I can help you subtract")

// The Calculator above does not follow SINGLE RESPONSIBILITY FUNCTION
// so, I will break the tasks down to a single class (file Calc.ts)

