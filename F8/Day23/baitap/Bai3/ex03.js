Array.prototype.push2 = function(...items) {
    let len = this.length;
    let argLen = items.length;
    
    for (let i = 0; i < argLen; i++) {
      this[len + i] = items[i];
    }
    
    return this.length;
  };
  let arr = [1, 2, 3];
  arr.push2(4, 5, 6);
  console.log(arr); // [1, 2, 3, 4, 5, 6] 