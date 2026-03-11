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
    }
}

function isTriangle(l1,l2,l3){
    if (l1 !== 0 || l2 !== 0 || l3 !== 0){
        return false
    }
    else{
        return true
    }
}

function triangle(isTriangle, l1, l2, l3){
    if (isTriangle(l1, l2, l3) === false) return 'Not valid.'
    
    
}

export default {calculator, triangle};
export {calculator, triangle}