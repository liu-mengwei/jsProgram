// 函数柯里化
// 我要实现什么

// let curryFn = curry(fn);
// // 我可以这样调用
// curryFn(1)(2)(3)
// curryFn(1, 2)(3)
// curryFn(1, 2, 3)

// // 也可以
// let curryFn = curry(fn, 1);
// curryFn(2, 3);
// curryFn(2)(3)


// function curry(fn, ...args) {  // 不用写默认值， 默认就是空数组
//   let fnLen = fn.length; // fn.length 可以获取到函数的参数个数

//   return function (...fnargs) {
//     let finalArgs = args.concat(fnargs);

//     if (finalArgs.length < fnLen) {
//       return curry(fn, ...finalArgs);  // 传给下一层要展开
//     } else {
//       return fn.apply(null, finalArgs); // 返回值不要忘写
//     }
//   }
// }


// 不更改this指向
function curry(fn, ...args) {  // 不用写默认值， 默认就是空数组
  let fnLen = fn.length; // fn.length 可以获取到函数的参数个数

  return function (...fnargs) {
    let finalArgs = args.concat(fnargs);

    if (finalArgs.length < fnLen) {
      return curry.call(this, fn, ...finalArgs); // 注意这里用call
    } else {
      return fn.apply(this, finalArgs);
    }
  }
}

let _curry = curry(function (a, b, c) {
  return a + b + c;
});

console.log(_curry(1, 2)(3));
console.log(_curry(1)(2)(3));




