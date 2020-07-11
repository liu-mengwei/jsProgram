
function flat(arr) {
  let ret = [];


  for (item of arr) {
    if (Array.isArray(item)) {
      ret.push(...flat(item));
    } else {
      ret.push(item);
    }
  }

  return ret;
}

// es2019 
arr.flat();

