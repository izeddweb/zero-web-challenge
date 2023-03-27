// //   challenge zero web school

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(',').slice(0,length-true).filter(function(ele){

//   return !ele !== isNaN(Number(ele))

// })
// .map(function ( ele ){
//   return ele[0].replace('_',' ')

// })
// .reduce(function(acc ,cur,index) {
//   // console.log(acc);
//   // console.log(cur);
//   // console.log(index);
//   return acc+cur
// })

// console.log(solution);// Elzero Web School

//                 set variable

//        Set variable

// const boxs = document.querySelectorAll('.box')

// const observer = new IntersectionObserver( (entries)=> {
//   entries.forEach((entrie) => {
//     if (entrie.isIntersecting){
//       entrie.target.classList.add('show','slide')
//     }

//     console.log( entrie.isIntersecting);
//   })
// },options ={
//   threshold:.2 ,
// })

// boxs.forEach((box)=> {
//   observer.observe(box)
// })

// console.log(100 !== "100"); // true
// console.log(100 != 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(+ -50 <  +"-40"); // true
// console.log(+ 10 <= -"-40"); // true
// console.log(+ "10" == 10); // true
// console.log(+ 20 > false); // true
// console.log(    "chalenge ok");

// let num1 = 10;
// let num2 = 20;

// console.log( num1 < num2); // true
// console.log( num1 <= num2 ); // true
// console.log(num1 != num2); // true
// console.log(num1 !== num2); // true
// console.log(+num1 <= num2); // true
// console.log(num2!== num1); // true

// console.log(    "chalenge 2 ok");

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a <= b); // true
// console.log(a < b && a > c); // true
// console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

// console.log(    "chalenge 3 ok");

// console.log(    "chalenge 1 if statment ok");
// Test Case 1
// let numb = 1; // "009"
// if (numb < 10){
//   console.log(` 00${numb}`);
// } else if (numb > 10 && numb < 100){
//   console.log(` 0${numb}`);
// }else {
//   console.log(` ${numb}`);
// }

// console.log(    "chalenge 2 if statment ok");

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if( num1 == str){
//   console.log(` "{num1} Is The Same Value As {str}"`);
// }
// if (num1 == str && typeof num1 !== typeof str) {
//   console.log(`"{num1} Is The Same Value As {str} But Not The Same Type"`)
// } if ( num1 != str2 || typeof num1 !== typeof str2){
//   console.log(`"{num1} Is Not The Same Value Or The Same Type As {str2}"`);
// }
// if ( str != str2 || typeof str == typeof str2){
//   console.log(`"{str} Is The Same Type As {str2} But Not The Same Value"`);
// }
// // Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

// console.log(    "chalenge 3 if statment ok");
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if( num3 > num1 && typeof num3 != typeof num2){
//   console.log(`"30 Is Larger Than 10 And Type string Not The Same Type As number"`);

//   if ( num3 > num1 && num3 == num2 && typeof num3 != typeof num2) {
//     console.log(`  "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//     `);
//   }

//   if ( num3 != num1 && typeof num3 != typeof num1  &&  num3 !=  num1) {
//     console.log(`  "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
//     `);
//   }

// }

// // Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// console.log(    "chalenge 4 if statment ok");

// Edit What You Want Here

// let num1 = 10;
// let num2 = 10;
// let num3 = "10";
// let num4 = 20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

// if (num1 >= num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 == num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 == num2 && num1 == num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if (num1 + num2 <= num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if (!(num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if (!(num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 !== 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }


// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

// let day = "  sunday ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday
// day = day.trim().substring(0,1).toUpperCase()+day.trim().substring(1)

// switch( day){
//   case  "Friday":
//   case  "Saturday":
//   case  "Sunday":
//     console.log( "No Appointments Available");
//     break;
//     case  "Monday":
//     case "Thursday":
//       console.log("From 10:00 AM To 5:00 PM")
//       break;
//     case "Tuesday":
//       console.log("From 10:00 AM To 6:00 PM");
//       break;
//     case "Wednesday":
//       console.log( "From 10:00 AM To 7:00 PM");
//       break;
//     default:
//       console.log("Its Not A Valid Day");
// }

//   challenge ok 

//                        Condition Met Challenge
//                        Challenge 01

// let st = "Elzero Web School";
// if (st.charAt(7).toLowerCase() === "w") {
//   console.log("Good");
// }

// if (Number(st) !== "string") {
//   console.log("Good");
// }

// if (typeof st.length === "number") {
//   console.log("Good");
// }

// if (st.split(" ")[0].repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

//              If And Switch Toggle
//              challenge 1

// let job = "Developer";
// let salary = 0;


// // changing in switch statment ok

// switch ( job) {
//   case "Manager":
//     salary = 8000;
//     break;
//   case " IT":
//   case " Support":
//     salary = 6000;
//     break;
//   case " Developer":
//   case " Designer":
//     salary = 7000;
//     break;
// }

// console.log(` My Job Is : ${job}, My Salary Is :${
//   salary
// } `);


// changing in if statment ok

// let holidays = 2;
// let money = 0;



// if( holidays == 0){
//   money = 5000;
// } else if( holidays == 1 || holidays == 2){
//   money = 3000;
// }else if( holidays == 3 ){
//   money = 2000;
// }
// else if( holidays == 4 ){
//   money = 1000;
// } else {
//   money = 000
// }

// console.log(`My Money is ${money}`);

// challenge ok

// challenge  Array


// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(0, num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// console.log(myFriends.slice(0,myFriends.length-true)); // ["Ahmed", "Elham", "Osama"];

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// friends.shift()+ friends.pop();
// console.log(friends); // ["Eman", "Osama"]

// // Write Your Code Here

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code
// finalArr= arrOne.concat(arrTwo)
// console.log(finalArr.sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]


// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][0].slice(words.length-true).toUpperCase()); // ZERO

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// // Solution 1
// if ( haystack.includes(needle)) {
//   console.log("Found");
// }
// // Solution 2

// if ( haystack.indexOf(needle) == 1) {
//   console.log("Found");
// }

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here
// allArrs= arr1.concat(arr2)
// allArrs= allArrs.sort().slice(-arr1.length)
// console.log(allArrs);
// console.log(allArrs.join("").toLowerCase()); // fxy

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

"????"
let solution1 = my.slice(zero,++counter).reverse()
console.log();
// ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(solution1); 
let solution2 = my.slice(zero,counter).reverse().slice(true,--counter)
console.log(solution2); 
// ["Elham", "Mazero"]


console.log([solution2.slice(zero,true)].); // "Elzero"
































