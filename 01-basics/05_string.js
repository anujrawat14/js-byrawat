const name="anuj"
const repocount=1
console.log(name+repocount)
console.log(`hello my name is ${name} and my repo count is ${repocount}`);//string interpolation

const gamename=new String("rawat-hc-com")
console.log(gamename);
console.log(gamename[0]);  // output is r

console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));

console.log(gamename.indexOf("t"));

const newstring=gamename.substring(0,4)
console.log(newstring);

const anotherstring=gamename.slice(0,4)

const newstringone="   hitesh   "
console.log(newstringone);
console.log(newstringone.trim());

const url="https://www.rawat%20.com"
console.log(url.replace("%20","_"));

console.log(url.includes('sundar'));

console.log(gamename.split("-"));




