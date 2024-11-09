const marvel_Heros=["thor","spiderman","ironman"]
const dc_heroes=["superman","flash","batman"]

// marvel_Heros.push(dc_heroes)

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][0]);//array can also take array inside it

// const all_heros=marvel_Heros.concat(dc_heroes);
// console.log(all_heros);

 // TWO ADD MORE THAN TWO ARRAYS THIS IS THE BEST METHOD :- spread operator

 console.log([...dc_heroes,...marvel_Heros]);

 const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

 const real_another_array=another_array.flat(Infinity)//it will take a depth and remove all the square bracekts
 
console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"}))//it will give square bracket if it is unable to convert 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

