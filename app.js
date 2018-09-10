const musketeers = ["Athos", "Porthos", "Aramis"]

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