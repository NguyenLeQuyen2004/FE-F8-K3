// copy object
// var a = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
// };
// var b = a;
// copy object
// var b = Object.assign({}, a); //shallow Copy
// var b = {...a}; // Spread (ES6) => Shallow copy

// var b =JSON.parse(JSON.stringify(a)); //Deep Copy
// b.name = "Hoàng An F8";
// console.log(a);

// Optional chaining (?.)
// 1 Optional chaining với thuộc tính 
// Thêm dấu ? trước dấu . gọi tên thuộc tính
// nếu kh có th tính nào thì trả về undefined
// var a = "Hoàng An";
// var a = undefined;
// console.log(a?.name.job.name);

// var a = "Hoàng An";
// console.log('Độ dài của chuỗi là: ${a?. length ?? "Không xác định"}');

//2. Optional chaining với phương thức 
var a;
console.log(a?.getName?.());

// apply(); bind(); call();

// ES6 Object: Spread, Destructuring, object literal enhancement