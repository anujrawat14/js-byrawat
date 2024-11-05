console.log(2>1); // output is true

console.log("2">1)  // output is true
console.log("02">1)  // output is true

//try to avoid comparsison of different data types:-

console.log(null>0); // output is false
console.log(null==0); //output is false
console.log(null>=0);  //output is true

// the reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined>0); // output is false
console.log(undefined==0); //output is false
console.log(undefined>=0);  //output is false

///strict check(===)
console.log(2===2);  //output is true
console.log("2"===2);  //output is false

