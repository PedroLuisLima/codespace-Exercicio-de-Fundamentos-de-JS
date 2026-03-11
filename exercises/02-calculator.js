import mathfunctions from "./libs/math.js"
import { calculator, triangle } from "./libs/math.js";

let operations = ["+", "-","*", "/"]

for (let operation of operations){
    (mathfunctions.calculator(1,1,operation));
}