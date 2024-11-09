//array

const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman",,"nagraj"]
const myArr2=new Array(1,2,3,4)

console.log(myArr[0]);
console.log(myArr.length);

//methods in arrays

myArr.push(6);
console.log(myArr);
myArr.push(7);
myArr.pop();
console.log(myArr);

myArr.unshift(9)
console.log(myArr)//it  will add  to the first place

myArr.shift()//it will remove the first element
console.log(myArr);

console.log(myArr.includes(3))//it will give true or false

console.log(myArr.indexOf(9)); // it will give "-1" if element is not present

const newArr= myArr.join()  //it will join the array but data type of new array is string
console.log(myArr);
console.log(newArr);

//slice , splice

console.log(`A : ${myArr}`)
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log(`B : ${myArr}`)

const myn2=myArr.splice(1,3) //It wil change the orignal array 
console.log(`C : ${myArr}`);
console.log(myn2)



