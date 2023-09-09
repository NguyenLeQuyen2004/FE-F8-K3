/* 
Chuỗi trong js 
*/

var fullname = "Nguyễn Lệ Quyên";

console.log(fullname);

var fullname2 = String("Nguyễn Lệ Quyên");
console.log(fullname2, typeof fullname2);

var fullname3 = new String("Nguyễn Lệ Quyên");
console.log(fullname3, typeof fullname3);
console.log(fullname3.length);

// truy cập vào các thuộc tính, phương thức xử lý chuỗi (được xây dựng từ tạo hàm string)
/*
tendoituong.tenThuocTinh
tendoituong.tenPhuongThuc()
*/ 
// tự động tạo ra 1 object tạm thời để có thể truy cập vào các phương thức, thuộc tính của hàm tạo string
console.log(String.prototype);

//length => lấy độ dài của chuỗi
var str = "xin chào f8";
// console.log(str.length);

//charAt() => lấy ký tự theo i
// console.log(str.charAt(1));
// for (let i = 0; i < array.length; i++) {
//     console.log(str.charAt(i));
    
// }

// charCodeAt() => lấy mã ASCII của ký tự theo index
// console.log(str.charCodeAt(0));

//concat => nối chuỗi
// console.log(str.concat("_", "F9", "_", "F10"));

//indexOf => tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha, nếu không tìm thấy trả về -1
// console.log(str.indexOf("f8"));

//lastIndexOf(value) => tìm vị trí cuối 
// console.log(str.lastIndexOf('f8'));

//includes(value) => tìm chuỗi và trả về true/false
// console.log(str.includes("f8"));

//slice(start, end) => cắt chuỗi từ start đến end
// console.log(str.slice(1, 5));
// console.log(str.slice(1));
// console.log(str.slice(-5));

//bài tập: lấy username của email
// var email = "hoangan.web@gmail.com";
// // lấy hoangan@
// console.log(email.indexOf("@"));
// console.log(email.slice(0, 11));

// replace(search, with) => tìm kiếm và thay thế chuỗi đầu tiên
// console.log(str.replace("f8", "f88"));
/*
lưu ý; hàm replace hỗ trợ thay thế dựa vào biểu thức chính quy (Regex)
*/

// replaceAll(search, with) => tìm kiếm và thay thế tất cả
//console.log(str.replaceAll("f8", "f88"));

// split() => tách chuỗi thành mảng
// console.log(str.split(" "));

// toLowerCase() => chuyển thành chữ thường
console.log(str.toLowerCase());
// toUpperCase() => chuyển thành chữ hoa 
console.log(str.toUpperCase());

// trim() => loại bỏ khoảng trắng đầu và cuối chuỗi
var str1 = "      Hoàng An     ";
console.log(str1);
console.log(str1.trim());

// trimStart()
console.log(str1.trimStart());
// trimEnd()
console.log(str1.trimEnd());

// match() => cắt chuỗi dựa vào biểu thức chính quy (Regex)
var content = "Lorem Ipsum is simply 0338875646 dummy text of the printing and 0852673871 typesetting industry. Lorem Ipsum has been the 0378789326 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
var pattern = /(0|\+84)\d{9}/g;
var phones = content.match(pattern);
console.log(phones);