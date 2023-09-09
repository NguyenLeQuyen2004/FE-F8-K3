function calculate(use) {
    const priceT1 = 1678; 
    const priceT2 = 1734; 
    const priceT3 = 2014;  
    const priceT4 = 2536;  
    const priceT5 = 2834;  
    const priceT6 = 2927;  
  
    var totalBill = 0;
  
    if (use <= 50) {
      totalBill = use * priceT1;
    } else if (use <= 100) {
      totalBill = 50 * priceT1 + (use - 50) * priceT2;
    } else if (use <= 200) {
      totalBill = 50 * priceT1 + 50 * priceT2 + (use - 100) * priceT3;
    } else if (use <= 300) {
      totalBill = 50 * priceT1 + 50 * priceT2 + 100 * priceT3 + (use - 200) * priceT4;
    } else if (use <= 400) {
      totalBill = 50 * priceT1 + 50 * priceT2 + 100 * priceT3 + 100 * priceT4 + (use - 300) * priceT5;
    } else {
      totalBill = 50 * priceT1 + 50 * priceT2 + 100 * priceT3 + 100 * priceT4 + 100 * priceT5 + (use - 400) * priceT6;
    }
  
    return totalBill;
  }
  
  console.log(calculate(70));   
  console.log(calculate(130)); 
  console.log(calculate(210));  