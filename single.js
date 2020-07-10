// 返回一个包装 缓存结果

function getSingle(fn) {
  let ret;

  return function (...args) {
    if (ret) return ret;

    return ret = fn.apply(this, args);
  }
}

// 可以写成这样
function getSingle(fn) {
  let ret;

  return function (...args) {
    return ret || (ret = fn.apply(this, args));
  }
}

// 将任意一个构造器转成单例，实现了职责单一化
function proxySingle(fn) {
  let instance = null;

  return function (...args) {
    if (instance) {
      return instance;
    } else {
      return instance = new fn(...args);
    }
  }
}