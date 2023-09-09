// hàm là 1 cú pháp trong lập trình, cho phép gom nhóm các đoạn chương trình tái sử dụng
//Hàm thể hiện 1 chức năng, đặt  tên hàm bằng động từ
// dùng cú pháp camelCase

// cú pháp 
// 1. Hàm không tham số, có tham số
// Định nghĩa hàm
// function tenHam(){
    // nội dung
//}

// function tenHam(thamSo1, thamSo2,..){
    // nội dung hàm
//}

// gọi hàm
//tenHam()
// tenHam(doiso1, doiso2,...)

// 2. Hàm có giá trị trả về, hàm không có giá trị trả về

// - hàm có từ khóa return => hàm return 
// => khi return đc gọi => thoát hàm (các đoạn code dưới return không hoạt động)
// - hàm không có từ khóa return => hàm void

// 3. Biên cục bộ, biến toàn cục
// - biến cục bộ: local variable => chỉ sử dụng trong phạm vi 1 hàm
// - biến toàn cục: Global Variable => sử dụng trong phạm vi ngoài hàm
// function getMessage(){
//     console.log('Xin chào F8');
// }
// getMessage();

// function getMsg(msg, type = "success"){
//     console.log(msg, type);
// }
// getMsg("F8", "true");

// hàm sum(a, b)
// function sum(a, b){
//     var total = a + b;
//     //console.log(total);
//     return total;
// }
// console.log(sum(4, 6) + 10);
// sum(4, 6);

// function division(a, b){
//     if(b !== 0){
//         return a / b;
//     }
//     return "không tính dc";
// }
// console.log(division(4, 2));

// function getMessage(value){
//     var value = "Xin chào: ${value}";
//     // biến cục bộ => khai báo trong hàm
//     console.log(value);
// }
// getMessage("F8");

var msg = "Hoàng An F8";
function getMessage(){
// msg => biến toàn cục
    return msg;
}
function setMessage(value){
    msg = value;
}
// Biến toàn cục cần khai báo trước khi gọi hàm
setMessage("Fullstack-F8");
console.log(getMessage());