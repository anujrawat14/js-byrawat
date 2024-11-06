//PRIMITVE
//7 types:-string,number,boolean,null,undefined,symbol,BIG INT

const id = Symbol('123')
const Anotherid = Symbol('123')

console.log(id == Anotherid);   // both ar different

const bignumber = 234567892n    // big int data types


//javascript is a dynamically typed language

//Refrence(non primitve)
//array,objects,functions  t

const heros = ["shaktiman", "nagraj", "doga"]
const details = {
    studentname: "rawat",
    rollnumber: 18
}
const myfunction = function () {
    console.log("hello world");

}

console.log(typeof details);  //object
console.log(typeof myfunction); //object function
console.log(typeof heros);//object



//*********************************  MEMORY    ********************************* */
// stack(primitive);heap(non primitive)

let myytname = "rawatjiff"

let anothername = myytname;
anothername = "anujff";

console.log(anothername);


let user1 = {
    email: "anujrawatff@gamail.com",
    upiid: "user1@sbi.com"
}
let user2 = user1

user2.email = "anuj@gmail.com"

console.log(user1.email);    //output is changed "anuj@gmail.com"
console.log(user2.email);    //output is "anuj@gmail.com"
