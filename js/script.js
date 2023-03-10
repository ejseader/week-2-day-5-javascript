
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


// SORTING 

// var nums = [10, 3, 100, 500, 50, 75, 45];

// nums.sort(function (current, next) {
//     return current - next;
// });

// console.log(nums.length);

// for (var i = 0; i < nums.length; i++) {
//     if (num[i] === 5000) {
//         break;
//     }

//     console.log(nums[i]);

// }


// Alternative to for loop when you need to call all items in an array
// nums.forEach(function (item, index) {
//     console.log(item, index);
// });

// A method is a function that is assigned to a property of an object.

var data = {
    name: 'Eric',
    sport: 'volleyball',
    pets: 1,
    kids: 2,
    hobby: 'guitar',
    printName: function() {
        console.log(this.name); // 'this' is equivalent to saying 'this parent object'
    }
};

data.printName();


var lowercase = ['a', 'b', 'c', 'd', 'e'];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getRandom(charSet) {
    return charSet[Math.floor(Math.random() * charSet.length)];
}

function genPass(data) {
    var result = '';
    var chars = [];

    if (data.lowercase) {
        chars = chars.concat(lowercase);
    }

    if (data.nums) {
        chars = chars.concat(nums);
    }

    chars.sort(function(a, b) {
        return 0.5 - Math.random();
    })

    for (var i = 0; i < data.passwordLength; i++) {
        result += getRandom(chars);
    }

    return result;
}

var options = {
    passwordLength: 35,
    lowercase: true,
    nums: true
};


// var random = Math.floor(Math.random() * 10) + 1;

var pass = genPass(options);

console.log(pass);


var uppercase = [];
var nums = [];

for (var l = 65; l < 91; l++) {
  uppercase.push(String.fromCharCode(l))
}

var lowercase = uppercase.map(function (letter) {
  return letter.toLowerCase();
});

for (var n = 0; n < 10; n++) {
  nums.push(n);
}


console.log(uppercase, lowercase, nums);