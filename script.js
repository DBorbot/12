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

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 1) continue;
    console.log(i);
}

let i = 2;
while (i < 16) {
    if (i % 2 === 0) {
        i++;
        console.log(i);
        continue;
    } else {
        i++;
        continue;
    }
}

const arrayOfNumbers = [];
for (i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;

}
console.log(arrayOfNumbers);














