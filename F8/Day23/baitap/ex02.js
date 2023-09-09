Number.prototype.getCurrency = function(currencyUnit) {
    return this.toLocaleString() + ' ' + currencyUnit;
  }
  
  String.prototype.getCurrency = function(currencyUnit) {
    var stringToNumber = Number(this);
    return stringToNumber.toLocaleString() + ' ' + currencyUnit;
  }
  
 // Sử dụng phương thức getCurrency trên Number và String
var price1 = 12000;
console.log(price1.getCurrency('đ')); // Hiển thị: 12,000 đ

var price2 = "12000000";
console.log(price2.getCurrency('đ')); // Hiển thị: 12,000,000 đ