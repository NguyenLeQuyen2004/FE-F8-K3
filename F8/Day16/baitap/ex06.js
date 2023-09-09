function draw() {
    const size = 8; // Kích thước bàn cờ
  
    for (let row = 1; row <= size; row++) {
      let line = "";
      for (let col = 1; col <= size; col++) {
        if ((row + col) % 2 === 0) {
          line += "██"; 
        } else {
          line += "  "; 
        }
      }
      console.log(line);
    }
  }
  
  // Gọi hà
  draw();