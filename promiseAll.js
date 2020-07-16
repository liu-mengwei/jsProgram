function promiseAll(...args) {
  if (!args.length) throw new Error('');

  let count = 0
  let ret = [];

  return new Promise((resolve, reject) => {
    args.forEach(promise => {
      if (!promise instanceof Promise) return;

      promise.then(res => {
        ret.push(res);
        count++;

        if (count === args.length) {
          resolve(ret);
        }
      }).catch(err => {
        reject(err);
      })
    })
  })
}

let a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 100);
})

let b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20)
  }, 200);
})

let c = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30)
  }, 300);
})

promiseAll(a, b, c).then(res => {
  console.log(res);
})

// 链式调用，直接把错误往丢给下一个promise
let p1 = new Promise((resolve, reject) => reject(1));
let p2 = p1.then(res => console.log(res));
let p3 = p2.catch(err => console.log(err));
console.log(p1 === p3); // false
