const score=400

const balance=new Number(100)
console.log(balance);

console.log(typeof balance.toString());
console.log(balance.toFixed(2));  //output is 100.00

const othernum=123.89996
console.log(othernum.toPrecision(4));

const hundreds=10000000
console.log(hundreds.toLocaleString("en-In"));//by default it sets US standard


//********************************   MATHS    *********************************/

//MATH IS AN OBJECT

console.log( Math.abs(-5));  //converts negative integer to positive
console.log(Math.round(4.8));//it is used to round of given number
console.log(Math.ceil(4.8));//it is used to give upper value of given number i.e 5
console.log(Math.floor(4.8));//it is used to  give lower value of given number i.e 4

console.log(Math.random())

// If YOU want number btw 1 to 10
console.log(Math.floor(Math.random()*10)+1)


const min=10;
const max=20;

console.log((Math.random()*(max-min+1))+min);//it can genrate random number between any two  number






