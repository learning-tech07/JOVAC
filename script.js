// let userAgeString = prompt("Enter your age : ")
// let userAge = Number(userAgeString)

// if(userAge >= 18){

//     console.log("You are eligible to vote.");

// }
// else{
//     console.log("You are not eligible to vote.");
// }

// let teckStack = ["html","css","js"]
// console.log(teckStack.length)
// console.log(teckStack[0])
// teckStack.pop()
// console.log(teckStack)

//shift , unshift , diff b/w scripting and programming language
// let cart = []
// cart.push("a","b")
// console.log(cart)

// let student = {
//     name:"Anamika",
//     rollNo : 21
// }
// console.log(student.name)
// console.log(student["name"])
// console.log(student)

//loop
// for(let n = 0 ; n<=10 ; n++){
//     console.log(n);
// }

// let n = 10;
// for(let i = 0 ; i<=n ; i++){
//     if(i%2==0){
//         console.log(i);
//     }
    
// }

// let n = 5;
// for(let i = 1 ; i<=10; i++){
//     console.log(n + "X" + i + " = " + i*n);
    
// }

// function playVideo(title){
//     console.log("Video "+ title);
// }
// playVideo("lecture 1")

// function check(num){
//     if(num%2==0){
//         console.log("Number is Even.");
//     }else{
//         console.log("Number is Odd.");
//     }    
// }
// check(2)

// function convert(temp){
//     temp = (9/5 * temp + 32);
//     console.log(temp);
// }
// convert(25)

// function convert(principalAmount,rate,time){
//     return (principalAmount*rate*time)/100 ;
// }
// console.log(convert(90000, 3 , 2));

// function highest(a , b , c){
//     return Math.max(a , b , c) ;
// }
// console.log(highest(30 , 52 , 95));

// function reverse(name) {
//     let s = "";
//     for (let i = name.length - 1; i >= 0; i--) {
//         s += name[i];
//     }
//     return s;
// }
// console.log(reverse("bat"));

// function reverse(name) {
//     return name === name.split("").reverse().join("");  
// }
// console.log(reverse("bat"));

// console.log(a)
// var a = 10;

// const add = (a, b) => {
//   return a + b;
// };

// const a = {
//     b:5
// }
// let m = a.b || 3;
// console.log(m);

// let greet = (name)=>{
//     console.log(`Hello ${name}!`);
// }
// greet("Anamika");

// const add = (a, b) =>ans =(a+b);
// console.log(add(5 , 5));

// const area = (radius,pi=3.14)=> pi*radius*radius ;
// console.log(area(2));

//-------------------------------------------------------------------------------------------------------------------------------------
//map

// const marks = [50 , 60 , 70];
// const updated = marks.map((num)=>{
//     return num + 5;
// })
// console.log(marks);
// console.log(updated);

//filter
// const marks = [30 , 40 ,50, 70,95];
// const passedStudents = marks.filter((num)=>{
//     return num>40;
// })
// console.log(marks);
// console.log(passedStudents);

// const numbers = [3 , 2 ,5, 4, 9];
// const even = numbers.filter((num)=>{
//     return num%2==0;
// })
// console.log(even);

//reduce
// Array.reduce((accumulator,currValue)=>{
//     return total;
// }, initialVal)

// const numbers =  [30 , 40 , 50]
// const total = numbers.reduce((acc,curr)=>{
//     return acc*curr;
// }, 1);
// console.log(total)

// const numbers =  [30 , 40 , 50]
// const total = numbers.reduce((acc,curr)=>{
//     return acc+curr;
// }, 0);
// console.log(total)

// const numbers =  [30 , 40 , 50]
// const total = numbers.reduce((acc,curr)=>{
//     return acc+curr;
// }, 30);
// console.log(total)

// const word =  ["hello", "Baby"]
// const sentence = word.reduce((acc,curr)=>{
//     return acc+curr+" ";
// }, "");
// console.log(sentence)

//find
// const ids = [101,102,103,104]
// const target = ids.find((id)=>{
//     return id === 102;
// })
// console.log(target)

// const marks = [45,50,90,70,80];
// const isTopper = marks.some((n)=>n>90);
// const fail = marks.every((n)=>n>30);
// console.log(isTopper)
// console.log(fail)

//sort //flat //flatMap

// const numbers = [3 , 2 ,5, 4, 9];         //ascending
// const sorted = numbers.sort((a,b)=>{
//     return a-b;
// })
// console.log(sorted);

// const numbers = [3 , 2 ,5, 4, 9];         //descending
// const sorted = numbers.sort((a,b)=>{
//     return b-a;
// })
// console.log(sorted);

// const numbers = [3 ,[ 2 ,5, 4], 9];         //flat
// console.log(numbers.flat())


// const students = [
//   {
//     name: "Anamika",
//     subjects: ["Maths", "Science"]
//   },
//   {
//     name: "Riya",
//     subjects: ["English", "Computer"]
//   }
// ];

// const allSubjects = students.flatMap(student => student.subjects);

// console.log(allSubjects);


// const products = [
//   {name: "bulb",  price: 50},
//   {name: "bottle",  price: 100},
//   {name: "pen",  price: 30},
//   {name: "bag",  price: 500}, 
// ];
//  const cart = products.reduce((acc,curr)=>{
//     return acc+curr.price;
//  },0);

//  const Afterdiscount = cart - (cart * 10/100);
//  console.log(Afterdiscount);

// const smartPhones = [
//   {name:"iphone" , price:8000 , rating:4.8},
//   {name:"vivo" , price:9000 , rating:4.6},
//   {name:"samsung" , price:7000 , rating:4.9},
//   {name:"samsung" , price:7000 , rating:3.7},
// ]
// const result = smartPhones.filter((smartPhones)=> smartPhones.rating>4.5).map((phones)=>{
//   return {
//     name:phones.name,
//     price:phones.price - phones.price*0.8
//   }
// });
// console.log(result);

//TASK

// Given Data:

// const students = [
// { id: 1, name: “Rahul”, marks: 85, city: “Delhi” },
// { id: 2, name: “Aman”, marks: 45, city: “Mumbai” },
// { id: 3, name: “Priya”, marks: 92, city: “Pune” },
// { id: 4, name: “Neha”, marks: 76, city: “Delhi” },
// { id: 5, name: “Rohit”, marks: 39, city: “Jaipur” }
// ];

// Tasks:

// 1. Create an array containing only student names.

// 2. Find all students who scored more than 50 marks.

// 3. Find the student whose id is 3

// 4. Calculate the total marks of all students.

// 5. Calculate the average marks of all students.

// 6. Check whether at least one student has failed (marks < 50).

// 7. Check whether all students have passed.

// 8. Sort students by marks in ascending order.

// 9. Sort students by marks in descending order.

// 10. Create a new array containing only city names.

// Bonus Questions:

// 1. Find the topper student.

// 2. Count how many students are from Delhi.

// 3. Create an object where city names are keys and student counts are values.

const students = [
  { id: 1, name: "Rahul", marks: 85, city: "Delhi" },
  { id: 2, name: "Aman", marks: 45, city: "Mumbai" },
  { id: 3, name: "Priya", marks: 92, city: "Pune" },
  { id: 4, name: "Neha", marks: 76, city: "Delhi" },
  { id: 5, name: "Rohit", marks: 39, city: "Jaipur" }
];

const studentNames = students.map(student => student.name);
console.log(studentNames);

const student50 = students.filter(student => student.marks>50);
console.log(student50);

const studentId3 = students.filter(student => student.id===3);
console.log(studentId3);

const total = students.reduce((acc,curr)=>{
  return acc + curr.marks
},0);
console.log(total);

let c = 0;
const avgMarks = students.reduce((acc,curr)=>{
  c++;
  return acc + curr.marks
},0);
console.log(total/c);

const failed = students.some(student => student.marks<50);
console.log(failed);

const passed = students.every(student => student.marks>50);
console.log(passed);

const ascending = students.sort((a,b)=>{
  return a.marks-b.marks
});
console.log(ascending);

const descending = students.sort((a,b)=>{
  return b.marks-a.marks
});
console.log(descending);

const city = students.flatMap(cityNames=> cityNames.city);
console.log(city);

const city1 = students.map((cityNames)=> cityNames.city);
console.log(city1);

const topper = descending[0].name;
console.log(topper);

const delhiStudents = students.filter((city)=>city.city==="Delhi");
console.log(delhiStudents.length);

const cityCount = students.reduce((acc, student) => {
    acc[student.city] = (acc[student.city] || 0) + 1;
    return acc;
}, {});

console.log(cityCount);