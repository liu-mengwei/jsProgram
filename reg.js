// 转换为驼峰命名
// var s1 = "get-element-by-id"; 
// 给定这样一个连字符串，写一个function 转换为驼峰命名法形式的字符串 getElementById

function getElementById(str) {

  return str.replace(/-\w+/g, (s) => {
    // 拿到字符串并截取
    s = s.substring(1);
    s = s[0].toUpperCase() + s.substring(1);

    return s;
  })

}

console.log(getElementById('get-element-by-id'));

// 获取 url 中的参数
// http://baidu.com?a=b&c=d
function getParam(url) {
  let dataobj = {};
  url.replace(/(\w+)=(\w+)/g, (match, key, value) => {
    dataobj[key] = value;
  }) 

  return dataobj;
}
 
getParam('http://baidu.com?a=b&c=d');


// 验证url地址有效性
// /^https?:\/\/\w+(\.\w+)*(\/\w+)*(\?\w+=\w+(&\w+=\w+)*)?$/


// a=b 替换顺序 => b=a
let str = 'b=a';
str.replace(/(\w+)=(\w+)/g, '$2=$1');


// 提取标签里面的内容
// <span class="love">you</span>
// 提取出you

str = '<span class="love">i</span> <span class="love">love</span> <span class="love">you</span>';
str.match(/<.+>(.+)<\/.+>/)[1];

function getContent(str) {
  let ret = [];

  while (str.length) {
    let arr = str.match(/\s*<\w+[^>]*>([^<>]*)<\/\w+>\s*/);

    if (arr) {
      ret.push(arr[1]);
      str = str.substring(arr[0].length);
    }
  }

  return ret;
}

// replace也可以
function getContent2(str) {
  let ret = [];

  str.replace(/\s*<\w+[^>]*>([^<>]*)<\/\w+>\s*/g, (match, p1) => {
    ret.push(p1);
  })

  return ret;
}

getContent2(str);