// 从url参数获取值

function query(key) {

  let search = window.location.search;
  search = search.substring(1);

  let reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
  let arr = search.match(reg);

  if (!arr) return '';

  return arr[2] || '';
}

function query(key) {
  let param = new URLSearchParams(window.location.search);
  return param.get(key);
}




