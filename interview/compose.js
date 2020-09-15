function compose(...fns) {
  let ret = fns;
  return function (...args) {
    for (let i = fns.length - 1; i >= 0; i--) {
      if (i === fns.length - 1) {
        ret = fns[i].apply(null, args);
      } else {
        ret = fns[i].call(null, ret);
      }
    }

    return ret;
  }
}