// var getMessage = function(){
//     console.log('Hello F8');
// };
// window.getMessage();

// Calculator.getMessage2 = function(){
//     console.log('Hello F8');
// };
// Calculator.getMessage2();

// Cú pháp 
//TenHamTao.tenHam = function(){}
// TenHamTao.tenbien = giatri

//Ví dụ: Array.isArray(), Number.isTnteger()

//kiểm tra biến dc tạo từ hàm nào
var a = []; //Array
var b = 'Hoàng An'; //string
// var c = new Calculator(5, 10); //calculator
var d = false;
// console.log(a.constructor.name);
// console.log(b.constructor.name);
// console.log(c.constructor.name);
// console.log(d.constructor.name);
// không áp dụng cho null và undefined

var User = function(){
    this.name = "Hoàng An";
    this.email = "quyennlph37238@fpt.edu.vn";

    return "Hello F8";
};

var user = new User();
// console.log(user);
// console.log(user.name);
// console.log(User());

// Nối 2 object
var a = {
    name: 'An',
    age: 31
};

var b = {
    email: 'hoangan.web@gmail.com',
    title: 'Giang viên',
};

// var result = Object.assign(a, b);
// console.log(result);
// console.log(a);
// console.log(b);

// var c = {
//     phone: '0384653837'
// };
// Object.assign(c, a);
// // console.log(c);

// Object.assign(c, b);
// console.log(c);

//Bài tập: Chuyển object sau thành dạng query
var query = {
    name: "Hoàng An F8",
    status: 1,
    category: 1,
    keyword: "Fullstack Offline",
};

var result = Object.entries(query)
 .map(function (item){
    return item.join("=");
 })
 .join("&")
 .replaceAll(" ", "+");
//  console.log(result);

 var url = 'https://fullstack.edu.vn/search?_type=sourse&q=Javascript+cơ+bản&status=';
 console.log(url);

 // slice 
 var queryString = url.split("?").slice(-1).join();

//  var query = queryString.split("&").map 
//  (function (item) {
//     return item.split("=");
//  });
//  query = Object.fromEntries(query);
//  console.log(query);


 // 
 var result = {};
 queryString 
    .split("&")
    .map(function (item) {
        return item.split("=");
     })
     .forEach(function (item){
        if(item[1].length > 0){
            result[item[0]] = item[1].replaceAll("+", " ");
        }
     });

     console.log(result);




