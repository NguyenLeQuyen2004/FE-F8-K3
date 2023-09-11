function reverseInteger(number) {
    // Chuyển số nguyên thành chuỗi
    var str = number.toString();
  
    // Đảo ngược chuỗi
    var reversedStr = str.split('').reverse().join('');
  
    // Chuyển chuỗi đảo ngược thành số nguyên
    var reversedNumber = parseInt(reversedStr);
  
    // Kiểm tra dấu của số ban đầu và số đảo ngược
    if (number < 0) {
      reversedNumber *= -1;
    }
  
    return reversedNumber;
  }
  
  console.log(reverseInteger(12345));  