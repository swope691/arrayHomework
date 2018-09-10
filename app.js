/*const musketeers = ["Athos", "Porthos", "Aramis"]

for (i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
}

musketeers.push("D'Artagnan");


musketeers.forEach(myElement=>{
    console.log(`${myElement}`)
});

musketeers.splice(2,1);

let ofMusketeers

for (ofMusketeers of musketeers){
    console.log(ofMusketeers);
}


const values = [3, 11, 7, 2, 9, 10];
let sum = 0

for (i = 0; i < values.length; i++){
    sum+= values[i]}
    console.log(sum)
*/

const values = [3, 11, 7, 2, 9, 10]
let max = 0
for (i = 0; i < values.length; i++){
   if(values[i] > max){
    max = values[i];
   }
}
console.log(max)