function deepClone(obj) {
  let ret;

  if (typeof obj === 'function') {
    return new Function('return ' + obj.toString())();
  }

  // 如果是原始类型值 修正js bug
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    ret = [];
  } else if (Object.prototype.toString.call(obj) === '[object Object]') { //只有这种对象可以用直接量创建
    ret = {};
  } else {
    // 正则 
    // 日期
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) // 数组可用
      ret[key] = deepClone(obj[key]);
  }

  return ret;
}

let a = [1, 2, 3];
let b = deepClone(a);

