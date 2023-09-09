function check(n){
    if(n < 1){
        return false;
    }
    
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
    
}
// Gọi hàm trong câu điều kiện if else
const number = 23;
if (check(number)) {
  console.log(number + " là số nguyên tố");
} else {
  console.log(number + " không là số nguyên tố");
}