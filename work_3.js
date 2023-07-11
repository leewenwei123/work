//題目3：輸入三個整數x,y,z，請把這三個數由小到大輸出。

function sort_b(numbers) {
  const len = numbers.length;
  //   console.log("len", len);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
      //   console.log("numbersJ:[" + j + "]", numbers[j]);
    }
  }
  return numbers;
}

const numbers = [10, 2, 5];

// numbers.sort((a, b) => a - b);

console.log("由小到大排序後的數字：");
console.log(sort_b(numbers));
