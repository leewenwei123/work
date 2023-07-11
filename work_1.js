//題目1：寫出一個99乘法表

const size = 9;

for (let i = 1; i <= size; i++) {

  let row = '';

  for (let j = 1; j <= size; j++) {
   
    row += (i * j).toString().padStart(2, ' ') + ' ';
  }

  console.log(row);
}
