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





//problem no 4
const statement = 'I am a Hard Working Person';

let divided_by_string = statement.split(" ");
let reverse_replace = divided_by_string.reverse()
let adjustString = reverse_replace.join(" ")
console.log(adjustString)






//problem no 5
const num = [1, 2, 3, 5, 10];
const copiedArray = num;


const s = copiedArray.splice(1)
copiedArray[0] = 99
console.log(copiedArray)
console.log(num)







//problem no 6
const student = [
    {name: "John", marks: 85},
    {name: "Alice", marks: 95}
]

//method no 1
for(let h of student){
    console.log(h.name + " " + "scored "  + h.marks)
}


//method no 2
for(let i = 0; i < student.length; i++){
    console.log(student[i].name + " scored" +  " " + student[i].marks)
}



