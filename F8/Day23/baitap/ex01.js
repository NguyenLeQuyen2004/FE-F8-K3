function tinhTong(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number') {
        return 'Dữ liệu truyền vào không hợp lệ.';
      }
      sum += numbers[i];
    }
    return sum;
  }
    console.log(tinhTong(1, 2, 3)); // Kết quả: 6
    console.log(tinhTong(1, 2, 3, 4, 5)); // Kết quả: 15
    console.log(tinhTong(1, '2', 3)); // Kết quả: 'Dữ liệu truyền vào không hợp lệ.'