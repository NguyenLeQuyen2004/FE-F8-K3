// các loại ép kiểu

// 1. ép kiểu sang số nguyên
// parseInt()
// Number.parseInt()

// var a = "a123a12";
// // var a = "123aa12";
// a = parseInt(a);
// console.log(a);

// // ép sang kiểu số thực
// // parseFloat()
// // Number.parseFloat()

// var a = "123.1a123";
// // var a = "a123.a12";
// a = parseFloat(a);
// console.log(a);

// // các kiểu dữ liệu khác chuyển sang number
// // true, false, [] , {}, null, underfined, Date => NaN
// var a = false;
// console.log(parseInt(a));

//3. ép kiểu bằng Number()
// -> chuyển thành kiểu số thực
// -> Dùng hàm Number() hoặc dấu +
// var a = "12.567";
// // a = Number(a);
// a = +a;
// console.log(a);

// các ngoại lệ
// true => 1
// false => 0
// [] => 0
// [1, 2, 3] = NaN
// [5] => 5
// ["5"] => 5
// ["F8"] => NaN
// {} => NaN các obj nói chung
// null => 0
// undefined => NaN
// new Date() => timestamp
// var a = new Date();
// console.log(Number(a));

//bài tập
// var arr = [5, "10", 20, 1, true, false, undefined, null, NaN, Infinity, -Infinity, "F8"];
// //tính tổng các số lẻ
// // for (let index = 0; index < array.length; index++) {
// //    if(index ){
// //    }
// // };
// var total = arr.reduce(function(prev, current){
//     if(current !== true){
//         current = Number(current);
//         if(!isNaN (current) !== Infinity && current !== -Infinity && current % 2 !== 0){
//             return prev + current;
//         }
//     }
//     return prev;
// }, 0);
// console.log(total);

// diều kiện để kiểm tra 1 biến là số:
// typeof = number, ko phải NaN, không phải Infinity  và -Infinity


// chuyển đổi hệ cơ số
// toString() => Chuyển số thành chuỗi
var a = 50;
// var a = a.toString(2); // hệ nhị phân
// a = a.toString(8); // hệ bát phân
// a = a.toString(16); // hệ thập lục phân
console.log(a);

//lấy số chữ số phần thập phân
// toFixed(Number) => number là số chữ số phần thập phân muốn lấy 
// tự động làm tròn
// chuyển về chuỗi

// toPrecision(number) => lấy số ccacs chữ số từ đầu ( áp dụng nguyên tắc làm tròn)
var a = 12.3467;
// a = a.toFixed(1);
a = a.toPrecision(5);
console.log(a);

// console.log([Number]);

// chuyển đổi định dạng số
var price = 12000000000;
price = price.toLocaleString("vi", {
    style: 'currency',
    currency: "VND"
});
console.log(price);

console.log(Math);
// 1. abs() trị tuyệt đối
// 2. ceil() làm tròn lên
// 3. floor() làm tròn xuống
// 4. round() làm tròn
// 5. min() lấy giá trị nhỏ nhất
// 6. max() lấy giá trị lớn nhất
// 7. random() lấy số ngẫu nhiên ( >= 0 && < 1)
// 8. sqrt() căn bậc 2
//  console.log(Math.random());
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));
