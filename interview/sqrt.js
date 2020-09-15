// 代码实现平方根
function sqrt(num) {

  function deep(start, end) {
    let middle = (start + end) / 2;

    let mult = middle * middle;
    if (Math.abs(mult - num) <= 0.001) {
      return middle;
    }

    if (mult > num) {
      return deep(start, middle);
    } else {
      return deep(middle, end);
    }
  }

  return deep(0, num);
}
