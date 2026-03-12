function circleArea(r){
    const pi= 3.14;
    let area= pi * (r**2)
    console.log('Circle area: ', area)
    return area
}

function calculator(num1, num2, operation){
    switch (operation){
        case "+":
            let sum = num1+num2;
            console.log('Sum: ', sum)
            break;
        case "-":
            let subtraction = num1-num2;
            console.log('Subtraction: ', subtraction)
            break;
        case "/":
            let quotient = num1/num2;
            console.log('Quocient: ', quotient)
            break;
        case "*":
            let multiplication = num1*num2
            console.log('Multiplication: ', multiplication)
            break;
        default:
            console.log('Operação invalida')
    }
}

function isTriangle(l1,l2,l3){
    if ((l1<=0) || (l2<=0) || (l3<=0)){
        return false
    }
    else{
        if ((l1+l2 > l3) && (l2+l3 > l1) && (l3+l1> l2)){
            return true
        }
        else{
            return false
        }
    }
}

function triangle(l1, l2, l3){
    if (isTriangle(l1, l2, l3) === false) return console.log('Not valid.');

    if ((l1 === l2) && (l2 === l3)) return console.log('Equilatero');

    if ((l1 === l2) || (l2===l3) || (l3 === l1)) return console.log('Isoceles');    

    return console.log('Escaleno');
}

export default {calculator, triangle, circleArea};

// export {calculator, triangle, circleArea} segunda maneira.