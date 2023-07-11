// 題目4：請設計一程式檢查輸入的身份證代號是否正確.
// 身份證代號共10碼(XS1234567C),檢查規則如下:
// X: 地區碼,範圍A-Z,所代表縣市,和其編碼數字如下:
// A 台北市 10 J 新竹縣 18 S 高雄縣 26 I 嘉義市 34
// B 台中市 11 K 苗栗縣 19 T 屏東縣 27 O 新竹市 35
// C 基隆市 12 L 台中縣 20 U 花蓮縣 28
// D 台南市 13 M 南投縣 21 V 台東縣 29
// E 高雄市 14 N 彰化縣 22 X 澎湖縣 30
// F 台北縣 15 P 雲林縣 23 Y 陽明山 31
// G 宜蘭縣 16 Q 嘉義縣 24 W 金門 32
// H 桃園縣 17 R 台南縣 25 Z 馬祖 33
// S: 性別碼,1表男性,2表女性
// 1234567: 流水編號7碼
// C: 檢查碼,欄位1-9乘上加權數之總和,除以10之餘數,以10減之,即檢查碼.
// 例如:
// D 2 1 2 3 4 5 6 7 原代號
// 1 3 2 1 2 3 4 5 6 7 編碼數字
// 1 9 8 7 6 5 4 3 2 1 x 固定權數
// ––––––––––––––––––––––––––––––––––––––
// 1+27+16+ 7+12+15+16+15+12

function checkID(id) {
  if (id.length !== 10) {
    return false;
  }

  const cityCodes = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    J: 18,
    K: 19,
    L: 20,
    M: 21,
    N: 22,
    P: 23,
    Q: 24,
    R: 25,
    S: 26,
    T: 27,
    U: 28,
    V: 29,
    X: 30,
    Y: 31,
    W: 32,
    Z: 33,
    I: 34,
    O: 35,
  };
  // console.log(cityCodes["A"]);
  if (!cityCodes[id[0]]) {
    return false;
  }

  if (id[1] !== "1" && id[1] !== "2") {
    return false;
  }

  const idArray = id.split("");
  idArray.shift();
  const weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  
  city_code_first = Math.floor(cityCodes[id[0].toUpperCase()] / 10);
  city_code_second = cityCodes[id[0].toUpperCase()] % 10;
  idArray.unshift(city_code_second);
  idArray.unshift(city_code_first);
  let sum = 0;

  for (let i = 0; i < idArray.length - 1; i++) {
    if (isNaN(parseInt(idArray[i]))) {
      return false;
    }
    // console.log("weights", weights[i]);
    // console.log("idArray", idArray[i]);
    sum += parseInt(idArray[i]) * weights[i];
  }

  const checkCode = 10 - (sum % 10);
  const inputCheckCode = parseInt(idArray[idArray.length - 1]);
  if (checkCode !== inputCheckCode) {
    return false;
  }
  return true;
}

console.log(checkID("D212345609"));
