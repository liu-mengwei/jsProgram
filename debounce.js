
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, args); // 也可以用arguements 箭头函数的arguments指向父级
      timer = null;
    }, delay);
  }
}
