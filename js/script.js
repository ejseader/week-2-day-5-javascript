
function calc(num1, num2, operator) {
// One way to write calculator function:
        if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    }
}

// Another way:
// switch(operator) {
//     case '+':
//         return num1 + num2;
//     case '-':
//         return num1 - num2;
//     case '*':
//         return num1 * num2;
//     case '/':
//         return num1 / num2;
// }

// Another way:
// return operator === '+' ? num1 + num2 : operator === '-' ? num1 - num2 : num1 * num2; 

var sum = calc(5, 10, '+');
var diff = calc(5, 10, '-');
var product = calc(100, 2, '*');

console.log(sum);
console.log(diff);
console.log(product);
 

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// var diff1 = subtract(10, 5);
// var diff2 = subtract(3, 1);

// console.log(diff2);


// function diff() {
//     console.log('before the return');


//     return 'yes, we can overwrite it!';
// }

// var returnedVal = diff();

// console.log(returnedVal);



// function makeToy(ing1, ing2, ing3) {
//     var completedToy = "" + ing1 + ing2 + ing3;
//     console.log('We have magically combined the ingredients: ' + ing1 + ing2 + ing3);
//     return completedToy
//   };
  
//   makeToy("plastic", "red color", "horn");


// function diff(num1, num2) {
//     console.log(num1); // 'local scope'
// }

// values in parentheses are called parameters
// function myFunc(num, str) {
//    console.log(num);
//}

// values in parentheses are called arguments
//myFunc(10, 'another');

//var num = 10;

//console.log(num);