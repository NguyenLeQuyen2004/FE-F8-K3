var showMessage = function(msg){
    console.log('xin chào f8');
    var display = function(){
        console.log('Xin chào: ' + msg);
    };
    display();
};

showMessage('F8');

// ứng dụng vào các JS FRAMEWORK:
// Component 
// - render
// - event handher
// - call, api,...

var Home = function(){
    var render = function () {
        console.log('Hello: ');
    };
    render();
};
    Home();


console.log("===closure===");
// var sum = function(a, b){
//     return a + b;
// };

// console.log(sum(10, 20));
var sum = function(a){
    return function(b){
        return a +b;
    };
};

//Giai đoạn 1: nhận đối số a
var add = sum(10);

//Giai đoạn 2: nhận đối số b
var result1 = add(20);
console.log("Result 1: ");

var counter = function(){
    var count = 0;
    return function(){
        return ++count;
    };
};


var count = counter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());


// hàm con sẽ kế thừa 
// - tham số của hàm cha
// - biến cục bộ của hàm cha
// - 


// giải thuật đệ quy: gọi lại chính hàm mà bạn đang định nghĩa
// var showNumber = function(n){
//     console.log(n);
//     if(n > 1){
//         showNumber(n-1);
//     }
// };

// showNumber(10);

var getTotal = function(n){
    if(n === 1){
        return 1;
    }
    return n + getTotal(n-1);
};
console.log(getTotal(10));
// tính tổng từ 1 -> n

var fibonacci = function(n){
    if(n === 1 || n === 2){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n-2);
}

    console.log(fibonacci(10));