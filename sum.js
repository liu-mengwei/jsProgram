function addBigInt(str1, str2) {
  let ret = [];
  let arr1 = str1.split('').reverse();
  let arr2 = str2.split('').reverse();

  let m = 0;
  let length = Math.max(arr1.length, arr2.length);

  let unit = 0;
  while (m < length) {
    let num1 = arr1[m] || 0;
    let num2 = arr2[m] || 0;

    let sum = Number(num1) + Number(num2) + unit;
    if (sum > 10) {
      unit = 1;
    } else {
      unit = 0;
    }

    ret[m] = sum % 10;
    m++;
  }

  if (unit === 1) ret[m] = 1;

  return ret.reverse().join('');
}
