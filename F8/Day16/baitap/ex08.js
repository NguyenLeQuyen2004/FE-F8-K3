function calculate(N) {
    if (N === 1) {
      return 1; 
    }
    // Đệ quy tính giá trị 
    return 1 / N + calculate(N - 1); 
  }
  
  // Gọi hàm
  const N = 8;
  const result = calculate(N);
  console.log("Giá trị của biểu thức là: " + result);