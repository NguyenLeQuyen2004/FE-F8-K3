// Function expression 
// var tenHam = function(){
    
//}

// var getMessage = function(){
//     console.log('Xin chào');
// }

// getMessage();

// IIFE dùng 1 lần
// (function(name){
//     console.log('Xin chào F8', name);
// })('Fullstack');

// var a = function(name){
//     console.log(name);
// }
//  var b = a;
//  b('F8');

// var a = function(){
//     console.log('xin chào f8');
// }
// kiểm tra
//  if(typeof a === "function"){
//     a();
//  }

//  var b;
//  if(b === undefined){
//     console.log("Nó là undefined");
//  }
//  console.log(typeof b, b);
//  if(typeof b === "undefined"){
//     console.log("Nó là undefined");
//  }

// var sum = function(a, b){
//     console.log(arguments);
//     console.log(a, b);
// };
// sum(5, 10, 15, 20);

// rest parameter
// var concat = function(str, ...args) {
//     console.log(str);
//     console.log(args);
//                 // tách dữ liệu thành 2 phần
//                 // -phần 1: đối số 1
//                 // - phần 2: các đối số còn lại
// };
// concat("Fullstacks", "F8", "F9");

// setTimeout();
// delay 1 function
// - tham số 1: 1 hàm
// - tham số 2: thời gian muốn delay
// - tham số 3: rest param
// var handleShow = function (name, email){
//     console.log('xin chào f8', name);
//     console.log(email);
// };
// setTimeout(function(){
//     console.log('Xin chào f8');
// }, 2000);
// setTimeout(handleShow, 2000, "Hoàng An", "HoangAn123@gmail.com");
// gọi hàm theo kiểu Callback

//setInterval => Lặp đi lặp lại nội dung trong function

// var count = 0;
// setInterval(function(){
//     console.log('xin chào', ++count);
// }, 2000);
//  var count = 0;
//  var id = setInterval(function(){
//     console.log('xin chào', ++count);
//     if(count === 10){
//         clearInterval(id);
//     }
//  }, 1000);

// var getA = function(fn, ...args){
//     setTimeout (function(){
//         console.log("getA");
//         if(typeof fn === "function"){
//             fn(...args); // lời gọi hàm chủ động
//         }
//     }, 1000);
// };

// var getB = function(name, email){
//     console.log('getB', name, email);
// };

// var getC = function(){
//     console.log('getC');
// };

// getA(getB, "Hoàng An", "HoangAn123@gmail.com");

//Bài tập: Định nghĩa 3 hàm one() => mất 3s để hiện kết quả, two() => mất 1s để hiện kết quả, three() => mất 2s 
// chạy theo thứ tự
var getOne = function(fn){
    setTimeout(function(){
      console.log("thứ nhất");
      if(typeof fn === "function"){
        fn();
      }
    }, 3000);
};
var getTwo = function(fn){
    setTimeout(function(){
      console.log("thứ hai");
      if(typeof fn === "function"){
        fn();
      }
    }, 1000);
};
var getThree = function(fn){
    setTimeout(function(){
      console.log("thứ ba");
      if(typeof fn === "function"){
        fn();
      }
    }, 2000);
};
var getFour = function(){
    console.log('Xin chào');
};
getOne(function(){
    getTwo(function(){
        getThree(getFour);
    });
});

// callback hell => khó bảo trì

