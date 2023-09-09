// number: kiểu dữ liệu nguyên thủy 
// hàm tạo của number là number

console.log([Number]);

var a = 10;
//kiểm tra 1 biến có phải lqaf number hay ko 
// if (typeof a === 'number'){
//     console.log("Đây là số");
// }

// kiểm tra 1 số nguyên
// if(Number.isInteger(a)){
//     console.log('Đây là số nguyên');
// }

// số NaN (not a number): gía trị ko tính toán dc
// - ép kiểu thất bại
// - biểu thức số học có 1 toán hạng là NaN
var a = NaN;
// console.log(a, typeof a);

//kiểm tra giá trị NaN 
if(Number.isNaN(a)){
    console.log("Đây là số NaN");
}

//Infinity: Vượt qua mức lưu trữ cho phép
console.log(1000 ** 1000);
console.log(10/ 0);

//kiểm tra
a = Infinity;
// if( a !== Infinity && a !== -Infinity){
//     console.log("Không phải");
// }

if(Math.abs(a) !== Infinity){
    console.log("Không phải");
}

// tìm hiểu: các loại ép kiểu 

// làm tròn và lấy phần thập phân toFixed()

// định dạng số và tiền tệ toLocaleString()

// đối tượng Math