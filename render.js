
// ${year}-${month}-${day}
function render(str, data) {

  let reg = /\$\{(\w+)\}/g
  str = str.replace(reg, function (match, key) {
    let arr = match.split(key);
    arr.splice(1, 0, data[key]);
    return arr.join('');
  });

  return str;
}


let data = {
  'year': '2020',
  'month': '07',
  'day': '29'
}
render('${year}-${month}-${day}', data)