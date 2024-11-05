let score1 = 30;
let score2 = "30";
let score3 = "30abc";
let score4 = null;
let score5 = undefined;
let score6 = true;

console.log(typeof (score1));
console.log(typeof (score2));
console.log(typeof (score3));
console.log(typeof (score4));
console.log(typeof (score5));
console.log(typeof (score6));

let ValueInNumber2 = Number(score2);
console.log(typeof (ValueInNumber2));

let ValueInNumber3 = Number(score3);
console.log(ValueInNumber3); //it will give NAN as an output

let ValueInNumber4 = Number(score4);
console.log(ValueInNumber4); //it will give 0 as an output

let ValueInNumber5 = Number(score5);
console.log(ValueInNumber5); //it will give NAN as an output

let ValueInNumber6 = Number(score6);
console.log(ValueInNumber6); //it will give 1 as an output

/*  33 => 33
    "33" => 33
    "33abc" => NAN
    "true"/"false => 1/0"
*/

let isLoggedIn = "a";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof (booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

//1 => true;2,3,5...=> false
//""=> false;"hty","a".....=>true

let randnum=10
let stringnumb=String(randnum)
console.log(stringnumb);
console.log(typeof stringnumb);

//***********************************  OPERATIONS   **********************************/

let value=3
let negValue=-value
console.log(negValue);

let str1="hello"
let str2="rawat"
console.log(str1+str2)

console.log("1"+2)  //output is 12
console.log(1+"2")  //output is 12
console.log(1+3+"2")  //output is 42 number first
console.log("1"+3+2)  //output is 132 string first

console.log(true) // output is true
console.log(+true);// output is 1
console.log(+""); // output is 0

let num1,num2,num3;
num1=num2=num3=2+2

// let gamecounter=100
// gamecounter++;
// console.log(gamecounter)   // 101 output

let gamecounter=100
++gamecounter;
console.log(gamecounter)   // 101 output


// POSTFIX AAND PREFIX OPERATIONS

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"