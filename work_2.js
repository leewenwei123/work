//題目2：有1、2、3、4個數字，能組成多少個互不相同且無重複數字的三位元數？都是多少？   共24個


const digits = [1, 2, 3, 4];

const result = [];

for (let i = 0; i < digits.length; i++) {
  for (let j = 0; j < digits.length; j++) {
    for (let k = 0; k < digits.length; k++) {
      if (i !== j && j !== k && i !== k) {
         
        result.push(digits[i] * 100 + digits[j] * 10 + digits[k]);
      }
    }
  }
}
console.log(`能組成的互不相同且無重複數字的三位數共有 ${result.length} 個：`);
console.log(result); 
