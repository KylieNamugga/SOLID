// This class will handle addition
class addition{
    // method
    add(input1:number, input2:number){
        return input1 + input2;
    }
 }
 
 // This class will handle division
 class division{
    // method
    divide(input1:number, input2:number){
        return input1 / input2
    }
 }
 
 // This class will handle multiplication
 class multiplication{
    // method
    multiply(input1:number, input2:number){
        return input1 * input2 
    }
 }
 
 // This class will handle subtraction
 class subtraction{
    // method
    subtract(input1:number, input2:number){
        return input1 - input2
    }
 }

class Calc {
    // methods
    // we are delegating method add from class addition to perform task
       add(input1:number, input2:number){
           let additionMethod = new addition() //this is composition
           return additionMethod.add(input1, input2)
       }

       divide(input1:number, input2:number){
           let divisionMethod = new division()
           return divisionMethod.divide(input1, input2)
       }

       multiply(input1:number, input2:number){
           let multiplicationMethod = new multiplication()
           return multiplicationMethod.multiply(input1, input2)
       }

       subtract(input1:number, input2:number){
           let subtractionMethod = new subtraction()
           return subtractionMethod.subtract(input1, input2)
       }
   
}

let calc = new Calc()
console.log(calc.add(2,5))
console.log(calc.multiply(2,5))
console.log(calc.subtract(5,2))
console.log(calc.divide(10,2))





