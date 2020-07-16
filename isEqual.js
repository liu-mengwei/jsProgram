function isEqual(a, b) {
  // 基本类型值 function比较
  if (!isObject(a) || !isObject(b)) {
    return a === b;
  }

  let nums1 = Object.keys(a).length;
  let nums2 = Object.keys(b).length;
  if (nums1 !== nums2) return false;

  for (let key in a) {
    if (!isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

