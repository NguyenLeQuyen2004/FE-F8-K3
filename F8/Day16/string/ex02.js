// bài 1: kiểm tra 1 chuỗi có viết hoa hết hay không

// var fullname = "TẠ HOÀNG AN";
// if(fullname === fullname.toUpperCase()){
//     console.log("Đúng");
// } else {
//     console.log("Sai");
// }

//bài 2: chuyển họ và tên thành dạng tên chuẩn
// var fullname = "tạ hoàng an" => "Tạ Hoàng An"
var fullname = "tạ hoàng an";
//t + ạ hoàng an
fullname = fullname.toLowerCase();
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);


var spacePosition = fullname.indexOf(" ");
// console.log(spacePosition);
// console.log(fullname.charAt(spacePosition + 1));
// fullname = fullname.slice(0, spacePosition + 1) +
//  fullname.charAt(spacePosition + 1).toUpperCase() + 
//  fullname.slice(spacePosition + 2);
var result = "";

while (spacePosition !== -1){
    var index = spacePosition + 1;

    result += fullname.slice(0, index) + 
    fullname.charAt(index).toUpperCase();

    fullname = fullname.slice(index + 1);

    spacePosition = fullname.indexOf(" ");
}

result = result + fullname; // nối phần còn lại của fullname


console.log(fullname);