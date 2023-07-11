//題目3：輸入三個整數x,y,z，請把這三個數由小到大輸出。


const x = 1;
const y = 2;
const z = 3;


const numbers = [x, y, z];


numbers.sort((a, b) => a - b);


console.log('由小到大排序後的數字：');
console.log(numbers);
