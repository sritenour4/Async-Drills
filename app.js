/* 
    Timing Out 
*/

// Create a function that takes a string message as an argument, and logs that message to the console
// let logMessage = (message) => console.log(message);

// call your function with a message
// logMessage('Hello!')

// // Use setTimeout to call your function again, but with a different message and after 2 seconds
// setTimeout(logMessage('Hi there!'), 2000);

// //  If both of your messages log at the same time, look at the syntax of a setTimeout. 
// // You'll need to call your function within an anonymous function the timeOut executes.
// setTimeout(() => logMessage('Another message'), 2000);

// another way to write it
// setTimeout(logMessage, 2000, 'Another message');

/*
Create a new function called getWords that will attempt to do the following using several setTimeout calls:
    Log a word instantly
    After 3 seconds, log another word
    2 seconds after that, log a third word
    Finally 1 second after the third word, log a final word
*/
// let getWords = (word) => console.log(word);

// getWords('word 1');

// setTimeout(() => {
//     getWords('word 2')
// }, 3000);

// setTimeout(() => {
//     getWords('word 3')
// }, 5000);

// setTimeout(() => {
//     getWords('word 4')
// }, 6000);

// another way 
// let getWords = () => {
//     console.log("one")

//     setTimeout(() => {
//         console.log('two')

//         setTimeout(() => {
//             console.log('three')
//             setTimeout(() => console.log('four'), 1000)

//         }, 2000)

//     }, 3000)
// }


/* 
    Callbacks and Recursion 
*/

// Create a function called done that logs Job's done! to the console
// let done = () => console.log("Job's done!");

/*  Create a different function (on the global scope) called countdown that accepts two arguments, num and callback
    The goal of this function will be to log a "countdown" from the number passed in as an argument, delayed by 1 second each time, and when it gets to 1, it should execute the callback argument
    Hint: You'll need one setTimeout for this to work, an if/else statement, and NO for loop for this to work
    Super Hint: You'll need to call countdown within itself, a concept called recursion    
*/
// let countdown = (num, callback) => {
//     setTimeout(() => {
//         if (num > 0) {
//             console.log(num);
//             countdown(num - 1, callback);
//         } else {
//             callback();
//         }
//     }, 1000);
// }

// Call the countdown function and pass it two arguments: a number of seconds to countdown from and the done function and see if it works
// countdown(5, done);

/* 
    Promises Promises 
*/

// Create a new global variable called lunchTime with a value of true
let lunchTime = true;

/* Create a new function called orderMeSomeFood that returns a new Promise
   In the resolver function of the Promise, write logic to check if the lunchTime variable is true
   If lunchTime is true, create an object with two properties and values (key/value pairs) of your choice:
    lunch: "your favorite lunch"
    drink: "your favorite beverage"
   Resolve the Promise with your object
   If lunchTime is false, create a variable and set it equal to a new Error that has your own message
   Reject the Promise with your new Error
 */
const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        let favLunch = {
            lunch: 'Sushi',
            drink: 'Water'
        }        
        if (lunchTime) {
            resolve(favLunch);
        } else {
            // let err = new Error('An error has occured.');
            reject(new Error('An error has occured.'));
        }
    });
};

orderMeSomeFood(lunchTime)
.then(res => console.log(res))
.catch(err => console.error(err));
