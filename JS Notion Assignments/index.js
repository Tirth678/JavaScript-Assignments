// Create a variable for each of the following: 
// your favorite color, your height in centimeters, 
// and whether you like pizza. Use appropriate variable declarations 
// (`let`, `const`, or `var`). Try logging it using `console.log`

let favColor = 'blue';
let height = 123;
const likePizza = true;

console.log(favColor);
console.log(height);
console.log(likePizza);

console.log(favColor, height, likePizza);

// - Assignment 2
//     Write a function `sum` that finds the sum of two numbers. 
//     Side quest - Try passing in a string instead of a number and see what happens?
    
const sum = (x,y) => {
    return x+y;
}
console.log(sum(1,2))
console.log(sum("1", "2"))
// strings will be considered as literal strings and it will add up as "12" instead of integer values

// - Assignment 3
    // Write a function called `canVote` that returns true or false if the `age` of a user is > 18
    
const canVote = (age) => {
    if(age>= 18)
        return true;
    else
        return false;
}

console.log(canVote(12))
console.log(canVote(19))

// - Assignment 4
    // Write an if/else statement that checks if a number is even or odd. 
    // If it's even, print "The number is even." Otherwise, print "The number is odd."

let num = 12;
    if(num%2 == 0){
        console.log(`The number is even\n`);
    }
    else{
        console.log(`The number is odd\n`);
    }
    

// - Assignment 5
    // Write a function called sum that finds the `sum` from 1 to a number

    const findSum = (sum) => {
        let res = 0;
        for(let i=1; i<sum; i++){
            res += i;
        }
        return res;
    }

console.log(findSum(100))


// - Assignment 6
    // Write a function that takes a `user` as an input and greets them with their name and age

let details = {
    name: "Harki",
    age: 12
}
const greet = (user) => {
    return `Hi ${user.name}, your age is ${user.age}`
}
console.log(greet(details))


// - Assignment 7
    // Write a function that takes a new object as input which has `name` , `age`  and `gender` and greets the user with their gender (Hi `Mr/Mrs/Others` harkirat, your age is 21)
    
// - Assignment 8
    // Also tell the user if they are legal to vote or not
let person1 = {
    name: "Harkirat",
    gender: "Male",
    age: 12
}
    const greetUser = (argu) => {
        let title;
        if(argu.gender == 'Male'){
            title = "Mr."
        }
        else if(argu.gender == 'Female'){
            title = "Ms."
        }
        else{
            title = "Only 2 genders!"
        }
        console.log(`Hi there! ${title}${argu.name}, your age is ${argu.age >= 18 ? 'Legal': 'illegal'} to vote.`)
    }
    
console.log(greetUser(person1));

// - Assignment 9
    // Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about `filter` in JS
  const arrayNum = (arr) => {
    return arr.filter((num) => {
        if (num % 2 === 0) {
            return true;
        }
        return false;
    });
};

console.log(arrayNum([1, 2, 3, 4, 5, 6]));


// - Assignment 10
// Write a function that takes an array of users as inputs and returns
//  only the users who are more than 18 years old

const usersData = [1,2,3,18,19,21,22,23];
const legelUser = (users) => {
    let finalUsers = 0;
     for(let i=0; i<users.length; i++){
        if(users[i] >= 18){
            console.log(`This ${users[i]} is above 18`)
        }
    }
}
   

console.log(legelUser(usersData))