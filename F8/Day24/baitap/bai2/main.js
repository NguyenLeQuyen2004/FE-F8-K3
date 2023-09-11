function chuyenSoThanhChu(number) {
    const units = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    const tens = ['', 'mười', 'hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi'];
    const powersOfTen = ['', 'ngàn', 'triệu', 'tỷ'];
  
    function convertChunk(chunk) {
      const digits = Array.from(String(chunk), Number);
      let words = '';
  
      if (digits.length === 1) {
        words += units[digits[0]];
      } else if (digits.length === 2) {
        if (digits[0] === 1) {
          words += tens[digits[1]];
        } else {
          words += tens[digits[0]] + ' ' + units[digits[1]];
        }
      } else if (digits.length === 3) {
        words += units[digits[0]] + ' trăm ';
        if (digits[1] === 0) {
          words += units[digits[2]];
        } else if (digits[1] === 1) {
          words += 'mười ' + units[digits[2]];
        } else {
          words += units[digits[1]] + ' mươi ' + units[digits[2]];
        }
      }
  
      return words;
    }
  
    if (number === 0) {
      return 'zero';
    }
  
    let result = '';
  
    if (number < 0) {
      result += 'âm ';
      number *= -1;
    }
  
    const chunks = [];
    while (number > 0) {
      chunks.push(number % 1000);
      number = Math.floor(number / 1000);
    }
  
    for (let i = chunks.length - 1; i >= 0; i--) {
      const chunk = chunks[i];
      if (chunk > 0) {
        result += convertChunk(chunk) + ' ' + powersOfTen[i] + ' ';
      }
    }
  
    return result.trim();
  }

  console.log(chuyenSoThanhChu(1234));  
  console.log(chuyenSoThanhChu(1234567890));  
  console.log(chuyenSoThanhChu(-123));  