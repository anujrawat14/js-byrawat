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

