
// 大计算函数的缓存
function cache(fn) {
  let cache = {};

  return function (...args) {
    let key = '';

    args.forEach(item => {
      let type = typeof item;
      if (type === 'object') {
        item = JSON.stringify(item);
      }

      key += `${item}${type} `;
    })

    if (cache[key]) return cache[key];

    return cache[key] = fn.apply(null, args);
  }
}

function add(a, b, options) {
  return a + b;
}

let cachefn = cache(add);

cachefn(1, 2, { 'name': 'liu' });
cachefn(1, 2, { 'name': 'liu' });
