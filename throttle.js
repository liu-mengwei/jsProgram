
// todo 有返回值怎么办
function throttle(fn, delay) {
  let timer = null;

  return function (...args) {
    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  }
}

// 含第一次判断
function throttle(fn, delay) {
  let timer = null;
  let first = false;

  return function (...args) {
    if (first) {
      fn.apply(this, args);
      first = false;
    }

    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(this, args);
      clearTimeout(timer);
      timer = null;
    }, delay);
  }
}
