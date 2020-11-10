// Bai1
// Cach 1
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise is the best");
//   }, 5000);
// });
// promise.then(function (success) {
//   console.log(success);
// });

// cách 2 dùng async await

// async function bai1(){
//     await setTimeout(() => {
//         console.log('Promise is da bezt')
//     }, 5000)
// }
// bai1();


//Bai 6
// function calculate (x1, y1, x2, y2) {
//     let a = ( x1 - x2 ) ** 2;
//     let b = ( y1 - y2 ) ** 2;
//     let c = Math.sqrt(a + b);
//     return c;

// };

// const d = calculate (3, 10, 0, 6);
// if (d !== 5) {
// console.log(`Failed: ${d} the calculation is wrong`);
// } else {
// console.log( ` ${d} Passed, bravo`);
// };

//Bai 4
// function randomr(){
//     let number = Math.floor(Math.random()*11);
//     return number;
// }
// const x = random();
// if (x < 0){
//     console.log(`Failed: the number is smaller than 0`);
// }
// else if (x > 10){
//     console.log(`Failed: the number is bigger than 0`);
// }
// else {
//     console.log(`Passed, bravo`);
// 