// console.log("Yo are Winner!!!");

// const land = prompt("Хочеш запустить программу \"ЛАНДШАФТ\"", "");
// if (land == "Да", land == "да") {

//     var landscape = function () {

//         var result = "";
//         var flat = function (size) {
//             for (var count = 0; count < size; count++)
//                 result = (result + "_")

//         };

//         var mountain = function (size) {
//             result = (result + "/")
//             for (var count = 0; count < size; count++)
//                 result = (result + "`")
//             result = (result + "\\")


//         };

//         flat(9);
//         mountain(4);
//         flat(6);
//         mountain(1);
//         flat(1);
//         return result;

//     };
//     console.log(landscape());
// };



// function isEven(N) {
//     if ((N % 2) == 0 && (N - 2) % 2 == 0)
//         return true;
//     else return false;
// };
// console.log(isEven(1011));

// function countBs(b, a) {

//     if (b == b && a < (b.length))
//         return console.log(b.charAt(a), (b.length))
//     else
//         return "Нет такой буквы!!!"


// };
// console.log(countBs("tuqewtuuiyrqrqou", 15));

// let charAt = [1, 2, 3, 4,];
// console.log(charAt.length - 1);
// charAt.push(5);
// console.log(Object.keys(charAt));
// console.log(Object.entries(charAt));
// charAt.splice(4, 0, "Привет");
// console.log(Object.entries(charAt));
// console.log()







// "use strict"

// if (4 == 9) {
//     console.log("ok");
// } else {
//     console.log("Error");
// }

// const num = 50;
// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log(`Ok`);
// }

// const num = 5;
// (num === 50) ? console.log(`Ok`) : console.log(`Error`);

// const num = 30;
// switch (num) {
//     case 49:
//         console.log(`Неверно`);
//         break;
//     case 100:
//         console.log(`Неверно`);
//         break;
//     case 50:
//         console.log(`В точку`);
//         break;
//     default:
//         console.log(`Не в этот раз`);
//         break;
// }

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log("i'm done")
// };



// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "uriwhihrgihr");

// if (hamburger === 3&& cola === 1 && fries) {
//     console.log("i'm done")
// } else {
//     console.log("Мы уходим!!!");
// };


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 4;

// if (hamburger === 3 && (cola === 2 || fries) === 3 && nuggets) {
//     console.log("i'm done")
// } else {
//     console.log("Мы уходим!!!");
// };
// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


// let johnReport, alexReport, samReport, mariaReport = 'Done!'
// console.log(johnReport, alexReport, samReport, mariaReport);

// console.log(!0);

// console.log(NaN || 2 || undefined); //2
// console.log(NaN && 2 && undefined); //NaN
// console.log(1 && 2 && 3); //3
// console.log(!1 && 2 || !3); //!3   false
// console.log(25 || null && !3); //25
// console.log(NaN || null || !3 || undefined || 5); // undefined 5
// console.log(NaN || null && !3 && undefined || 5); //5
// console.log(5 === 5 && 3 > 1 || 5); //5 true

// const hamburger = 3,
//     fries = 3,
//     cola = 0,
//     nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }; // Done!


// let hamburger;
// const fries = NaN,
//     cola = 0,
//     nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!');
// }; // Done!

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// };

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {

//     if (i === 6) {
//         // break
//         continue;
//     }
//     console.log(i);

// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }

// }

// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

// "use strict"

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Sekond level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k == 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }



// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Sekond level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) break first;
//             console.log(`Third: ${k}`);
//         }
//     }
// }

// let i = 5;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// for (let i = 20; i >= 10; i--) {
//     console.log(i);
//     if (i == 13) break;
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 1) continue;
//     console.log(i);
// }

// let i = 2;
// while (i < 16) {
//     if (i % 2 === 1) {
//         console.log(i);
//         i++;
//         continue;
//     } else {
//         i++;
//         continue;
//     }
// }

// const arrayOfNumbers = [];
// for (i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;

// }
// console.log(arrayOfNumbers);

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === `number`) {
//         data[i] = data[i] * 2;

//     } else {
//         typeof (data[i]) === `string`;
//         data[i] = `${data[i]} - done`;
//     }

// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]

// }


// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i < lines; i++) {
//     for (let j = 1; j <= lines - i; j++) {
//         result += ' ';
//     }

//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     for (let j = 10; j > 2 * i + 1; j--) {

//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";


//     }
//     result += '\n';
// }
// console.log(result);
'use strict';

// let numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = +prompt('На сколько оцениваете его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// if (personalMovieDB.count < 10) {
//     console.log('Просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка')
// }
// console.log(personalMovieDB);


// let johnReport, alexReport, samReport, mariaReport = 'Done';
// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(NaN || 2 || undefined); 2
// console.log(NaN && 2 && 3); NaN
// console.log(1 && 2 && 3); 3
// console.log(!1 && 2 && !3); false
// console.log(25 || null && !3); 25
// console.log(NaN || null || !3 || undefined || 5); 5
// console.log(NaN || null && !3 && undefined || 5); 5
// console.log(5 === 5 && 3 > 1 || 5); 5  true
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);

//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
//     for (let j = 1; j < 5 - i; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const length = 7
// for (let i = 1; i <= length; i++) {

//         for (let j = 0; j < i; j++) {
//             result += '8';

//         }
//         for (let j = 0; j <= 2 * length - i * 2; j++) {
//             result += '*'
//         }
//         for (let j = 1; j < i * 2; j++) {
//             result += '8';

//         }
//         result += '\n';


//     }

// console.log(result);

// let result = '';
// for (let i = 5; i <= 10; i++) {
//     result = i;
//     console.log(result);
// }
// let i = 2;
// while (i <= 16) {
//     if (i % 2 == 1)
//         console.log(i);
//     i++;

// }
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 1; i < 6; i++) {
//     result[i - 1] = data[data.length - i];

// }
// console.log(result);

// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }

//     result += '\n';
// }
// console.log(result);

// 'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//         b = +prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }
// if (personalMovieDB.count < 10) {
//     console.log('Просмотренно довольно мало фильмов');

// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }
// console.log(personalMovieDB);

// let x = 2,
//     y = 3;
// function plus1(x) {
//     return x + 1;
// }
// console.log(plus1(y))

// let square = function (x) {
//     return x * x;
// };
// console.log(square(plus1(y)));


// let a = 3;
// function addTwo(x) {
//     let ret = x + 2
//     return ret
// }
// let b = addTwo(a);
// console.log(b)

// let vali = 2;
// function multiplyThis(n) {
//     let ret = n * vali
//     return ret
// }
// let multiplied = multiplyThis(6);
// console.log('exemple of scoup:', multiplied);

// let val = 7;
// function createAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b
//         return ret
//     }
//     return addNumbers
// }
// let adder = createAdder()
// let sum = adder(val, 8)
// console.log('example of function returning a function:', sum);

// function createCounter() {
//     let counter = 0
//     const myFunction = function () {
//         counter = counter + 1
//         return counter
//     }
//     return myFunction
// }
// const increment = createCounter(),
//     c1 = increment(),
//     c2 = increment(),
//     c3 = increment();
// console.log('example increment', c1, c2, c3);



// function f() {
//     let value = Math.random();
//     return value;
// }
// let arr = [f(), f(), f()];
// console.log(arr);

// function f() {
//     let value = 123;
//     return value;
// }
// let g = f();
// console.log(g);
// g = null;
// console.log(g);

// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }
// console.log(sum(1)(2));
// let arr = [1, 2, 3, 4, 5, 6, 7];
// function inBetween(a, b) {
//     return function (x) {
//         return x >= a && x <= b;
//     };
// }
// console.log(arr.filter(inBetween(3, 6)));

// function inArray(arr) {
//     return function (x) {
//         return arr.includes(x);
//     };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7,];
// console.log(arr.filter(inArray([1, 2, 28])));

// 'use strict';
// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);

// }
// showFirstMessage('Hello world');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));

// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log('Hello');
// };
// logger();

// const calc = (a, b) => { return a + b };

// function calc(a, b) {
//     return a + b;
// };
// console.log(calc(3, 4));

// function result(a) {
//     return a % 2 === 0;
// };
// console.log(result(4));

// function factorial(x) {

//     if (x === 0 || x === 1) {
//         return 1;
//  }
//     return x * factorial(x - 1);
// };

// console.log(factorial(7));



// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }
// function promotion(result) {
//     return result * discount;
// }
// const rest = convert(500, usdCurr);
// console.log(promotion(rest));

// function sayHello(a) {
//     return 'Привет,' + ' ' + a;
// };
// console.log(sayHello('Антон'));

// function returnNeighboringNumbers(a) {
//     return [a - 1, a, a + 1];
// };
// console.log(returnNeighboringNumbers(3));


// function getMathResult(num, times) {
//     if (typeof (times) !== 'number' || times <= 0) {
//         return num;
//     }
//     let str = '';
//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += num * i;
//         } else {
//             str += num * i + '---';
//         }
//     }
//     return str;
// }
// console.log(getMathResult(10, 5));

// const lines = 5;
// let result = '';
// for (let i = 1; i <= lines + 1; i++) {

//     for (let j = 0; j <= lines - i; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i - 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);
// console.log('\u{1F450}');



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов', ''),
            b = +prompt('На сколько оцените его?', '');

        if (a !== 0 && a !== null && a !== '' && a.length <= 50 && b !== 0 && b !== null && b !== '') {
            personalMovieDB.movies[a] = b;

        } else {
            i--;
        }
    }

}
rememberMyFilms();

function detectPersonalLevel() {

    if (personalMovieDB.count <= 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else if (personalMovieDB.count === 0 || null) {
        alert('Произошла ошибка');
    }
    
}
detectPersonalLevel();


console.log(personalMovieDB);







// const usdCurr = 28;
// // const eurCurr = 32;
// const discount = 0.9

// function convert(amount, curr) {
//     return amount * curr;
// }

// function promotion(result) {
//     console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion(res);
// // convert(500, eurCurr);

// function sayHello(name) {
//     return 'Привет ' + name;
// }
// console.log(sayHello('Дима'));

// function returnNeighboringNumbers(number) {
//     return [number - 1, number, number + 1];
// }


// function getMathResult(number1, number2) {
//     if (typeof (number2) !== 'number' || number2 <= 0) {
//         return number1;
//     }
//     let str = '';
//     for (i = 1; i <= number2; i++) {
//         if (i === number2) {
//             str += number1 * i;
//         } else {
//             str += number1 * i + '---';
//         }
//     }
//     return str;
// }



// console.log(getMathResult(3, 4))


// let q = 89;
// console.log(typeof (q));

// let str = `htr`;
// str = str[0] + 'T' + str[2];
// console.log(str);

// console.log(' Dima Borbot'.toUpperCase());
// console.log('DIMA BORBOT'.toLowerCase());


// let str = 'Dima Borbot';
// let target = 'b';
// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) {
//         console.log('error');
//         break;
//     } else {
//         console.log(`Найдено здесь: ${foundPos}`);
//     }
//     pos = foundPos + 1;
// }

// let str = 'Dima Borbot';
// let target = 'o';
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//     console.log(pos);
// }

// function ucFirst(str) {
//     return str = (str[0].toUpperCase() + str.slice(1, ));
// }

// console.log(ucFirst('dima'));



// function checkSpam(str) {
//    str = str.toUpperCase();
//     return str.includes('VIAGRA') || str.includes('XXX')
// }
// console.log(checkSpam('buy Viagra now'));

// const str = 'test';
// // const arr = [1, 2, 3]
// console.log(str);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let fruit = 'Some fruit';
// console.log(fruit.indexOf('q'));

// const logg = 'Hello world';
// // console.log(logg.slice(6));
// // console.log(logg.slice(-5));

// // console.log(logg.substring(6, 11));
// console.log(logg.substr(1, 7));


// const num = 12.2;
// console.log(Math.round(num));


// const test = '12.2px';
// console.log(parseInt(test));

// console.log(typeof(parseFloat (test)));