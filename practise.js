//Coding challenge #1. Print numbers from 1 to 10

/* for (let num = 1; num <= 10; num++) {
  console.log(num);
}
 */

//Coding challenge #2. Print the odd numbers less than 100

/* for(let oddNum=1; oddNum<100; oddNum++){
  if(oddNum%2!=0){
    console.log(oddNum);
  }
} */

// Coding challenge #3: Print the multiplication table with 7

/* for(let i = 1; i<=10; i++){
  console.log(`7*${i} = ${7*i}`);
}
 */

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

/* for(let i =1; i<=10; i++){
  console.log(`Multiplication Table ${i}`);
  for(let j=1; j<=10; j++){
    console.log(`${i}*${j}= ${i*j}`);
  }
} */

// Coding challenge #5: Calculate the sum of numbers from 1 to 10

/* let sum = 0;

for (let i = 0; i <= 10; i++) {
  sum += i;
}

console.log(sum); */

// Coding challenge #6: Calculate 10!

/* let n1 = 1;

for (let i = 10; i >= 1; i--) {
  n1=(n1 * i);
}

console.log(n1); */

// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

/* let sum=0;
for (let i = 10; i < 30; i++) {
  if(i%2!=0){
    sum+=i
  }
}
console.log(sum); */

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

// Coding challenge #10: Calculate the sum of numbers in an array of numbers

// Coding challenge #11: Calculate the average of the numbers in an array of numbers

/* let arr = [15,10,5,2,8,7];
let num=0;
let x;
for(let ele of arr){
   x = num+=ele
   x = x/arr.length
}
console.log(x);

 */

let arr = [25, 10, 5, 100, 50, 900, 10, 2, 25];

let smallestNumber = arr[0];
let secondSmallestNumber = [];

for (let i = 0; i < arr.length; i++) {
  if (smallestNumber > arr[i]) {
    smallestNumber = arr[i];
    secondSmallestNumber.push(arr[i]);
  }
}

console.log(secondSmallestNumber[secondSmallestNumber.length-2]);

/* 

s = 25 i= 25 { false }
s = 25 i = 10 {true } s = 10
s = 10 i = 5 {true} s = 5
s = 5 i = 100 {false}
s = 5 i = 50 {false}
s = 5 i = 900 {false}
s = 5 i = 10 {false}
s = 5 i = 2 {true} s = 2
s = 2 i = 25 {false}

smallestNumber = 2

*/
