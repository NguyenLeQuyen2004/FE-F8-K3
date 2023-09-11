function getRandomColor() {
    const letters = '0123456789ABCDEF'; // giá trị hexa
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  
  // Ví dụ sử dụng hàm
  const randomColor = getRandomColor();
  console.log(randomColor); 