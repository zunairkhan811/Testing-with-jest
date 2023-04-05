class calculator {
    add(a,b){
       return a+b;
    }
    subtract(a,b){
     return a-b;
    }
    divide(a,b){
       return a/b;
    }
    multiply(a,b){
      return a*b;
    }
}
const calculate = new calculator
console.log(calculate.add(2,3))
module.exports = calculate