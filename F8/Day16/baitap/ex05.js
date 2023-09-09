function draw(n) {
    var number = 1;
  
    for (var i = 1; i <= n; i++) {
      var row = "";
      for (var j = 1; j <= i; j++) {
        row += number + " ";
        number++;
      }
      console.log(row);
    }
  }
  
  // Gọi hàm
  const n = 5;
  draw(n);