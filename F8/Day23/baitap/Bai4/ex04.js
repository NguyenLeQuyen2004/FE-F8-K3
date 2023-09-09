Array.prototype.filter2 = function(callback) {
  var result = [];
  var len = this.length;
  
  for (var i = 0; i < len; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  
  return result;
};
var arr = [1, 2, 3, 4, 5];
var filteredArr = arr.filter2((element) => element % 2 === 0);
console.log(filteredArr);
