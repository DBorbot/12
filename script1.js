


// let makeNoise = function () {
//     console.log("pling!");
// };
// makeNoise();

// var power = function (base, exponent) {
//     var result = 1;
//     for (var count = 0; count < exponent; count++)
//         result = result * base;
//     return result;
// };
// console.log(power(2, 10));

let x = "Outside";
let f1 = function () {
    let x = "inside f1";

};
f1();
console.log(x);

let f2 = function () {

    x = "inside f2";
};
f2();
console.log(x)