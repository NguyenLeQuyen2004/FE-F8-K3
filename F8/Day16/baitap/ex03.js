function calculate(n){
    var sum = 0;

    for(var i = 1; i <= n; i++){
       sum += i * (i + 1);
    }
    return sum;
}
    console.log(calculate(4));
    console.log(calculate(7));
    console.log(calculate(9));