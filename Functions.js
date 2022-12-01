/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1,l2){
    let result
    result= l1*l2
    return result
}
console.log(area(5,5))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log("--------------------ex2---------------")
function crazySum(n1,n2){
  let sum
  sum=n1+n2
  return sum
}
console.log(crazySum(1,5))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
console.log("--------------------ex3---------------")
function crazyDiff(i){
  let diff
  diff= i-19
  if(i>19){
  return diff*3
  }else{
    return diff
  }
}
console.log(crazyDiff(18))
/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
console.log("--------------------ex4---------------")
function boundary(n){
    if(n>=20,n<=100||n===400){
       return true
    }
}

console.log(boundary(30))
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
console.log("--------------------ex5---------------")
function strivify(string){
  if(string.startsWith("Strive")){
    return string
  }else {
   return "Strive "+string
  }
}
console.log(strivify("ajsj"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
console.log("--------------------ex6---------------")
function check3and7(n){
  if(n%3==0 || n%7==0){
    return true
  }else{
    return false
  }
}
console.log(check3and7(8))
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
console.log("--------------------ex7---------------")

function reverseString(str){
  
    
let reverse=""

for(i=str.length-1;i>=0;i--){
    reverse+=str[i]
}
  return reverse
    
}


console.log(reverseString("strive"))
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
console.log("--------------------ex8---------------")
function upperFirst(sentence){
    let words=sentence.split(" ")
    for(i=0;i<sentence.length;i++){

    }
    
}

console.log(upperFirst("and and and"))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
console.log("--------------------ex9---------------")
function cutString(strings){
   split=strings.split("")
   split.pop()
   split.shift()
   let join=split.join("")
  return join
}
console.log(cutString("something"))
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
console.log("--------------------ex10---------------")
function giveMeRandom(n){
 let numbers=[]


let random=Math.floor(Math.random() * 10)-1
for(i=0;i<=n;i++){
    numbers.push(random)
}
return numbers
}

console.log(giveMeRandom(7))
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
