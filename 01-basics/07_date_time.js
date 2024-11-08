let myDate = new Date()

console.log(typeof myDate) //object

console.log(myDate.toString()) //Fri Nov 08 2024 03:43:58 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //Fri Nov 08 2024
console.log(myDate.toLocaleDateString()) //11/8/2024
console.log(myDate.toJSON())  //2024-11-08T03:43:58.897Z
console.log(myDate.toLocaleString());  //11/8/2024, 3:43:58 AM
console.log(myDate.toLocaleTimeString()); //3:43:58 AM
console.log(myDate.toTimeString());  //03:43:58 GMT+0000 (Coordinated Universal Time)

// let mycreatedDate=new Date(2023,0,23,5,3)
// let mycreatedDate=new Date("2023-02-14")
let mycreatedDate = new Date("01-14-2023")

console.log(mycreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp); //output will be in milli seconds
// console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000))

let newdate = new Date()
console.log(newdate)
console.log(newdate.getDay())
console.log(newdate.getHours())
console.log(newdate.getMonth() + 1)//+1 is used to give exact date

console.log(newdate.toLocaleString('default', {
    weekday: "long",
    
}))//we can add more options to it
