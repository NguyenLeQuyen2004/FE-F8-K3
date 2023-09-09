function calculate(km){
var price = 0;
//TH1
if(km <= 1){
    price = 15000;
} else if(km <= 5){
    price = 13500 * km;
} else if(km > 5){
    price = 11000 * km;
}
//TH2
if(km > 120 ){
    const discount = 0.1; // Tỷ lệ giảm giá (10%)
    price *= (1 - discount); // Áp dụng giảm giá
}
 return price;
}
 console.log(calculate(0.5));
 console.log(calculate(4));
 console.log(calculate(8));
 console.log(calculate(125));
