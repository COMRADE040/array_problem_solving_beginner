//MINI PROBLEM SOLVING ARRAY RELATED


//problem No 1
const colors = ["red", "blue", "green", "yellow", "orange"];

//Method no 1
for(let i = colors.length - 1; i >= 0; i--){
    console.log(colors[i])
}



//Method no 2
let rev = [];

for(let i = 0; i < colors.length; i++){
    rev = i+1 + "-" + colors[i] + " " + rev
}
console.log(rev)





//problem No 2
const numbers = [12, 98, 5, 41, 23, 78, 46];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i], "is Even")
    }else{
        console.log(numbers[i], "odd Number")
    }
}





//problem no 3
var names = ['Tom', "Tim", "Tin", "Tik"];

//method no 1
var join = names.join('')
console.log(join)

//method no 2
let k = ""
for(const j of names){
    k = k + j
}
console.log(k)