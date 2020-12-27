function Promise(executor) {
  this.status = 'pending';
  this.value = null;
  this.reason = null;

  this.onfulfilledArr = []; // 存的都是then的第一个参数，即成功处理函数
  this.onRejectedArr = []; // 存的都是then的第二个参数，即失败处理函数

  // 使用箭头函数保证this指向正确
  const resolve = value => {
    setTimeout(() => {
      if (this.status === 'pending') {
        this.value = value;
        this.status = 'fulfilled';
        this.onfulfilledArr.forEach(fn => fn(value));
      }
    })
  }

  const reject = reason => {
    setTimeout(() => {
      if (this.status === 'pending') {
        this.reason = reason;
        this.status = 'rejected';
        this.onRejectedArr.forEach(fn => fn(reason));
      }
    })
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

function noop() { }

// 将方法挂在原型上
Promise.prototype.then = function (onfulfilled = noop, onrejected = noop) {
  let promise2

  if (this.status === 'fulfilled') {
    return promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let result = onfulfilled(this.value)
          resolve(result)
        } catch (error) {
          reject(error)
        }
      })
    })
  }

  if (this.status === 'rejected') {
    return promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let result = onrejected(this.reason);
          resolve(result)
        } catch (error) {
          reject(error)
        }
      })
    })
  }


  if (this.status === 'pending') {
    this.onfulfilledArr.push(onfulfilled);
    this.onRejectedArr.push(onrejected);
  }
}

// let promise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000)
// })
// promise.then(() => console.log('打印'))

// let promise = new Promise((resolve, reject) => {
//   resolve('data');
// })
// promise.then((data) => {
//   console.log(data);
// })
// console.log(1);


let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('data'), 1000)
}).then((data) => {
  console.log(data)
  return 'next'  // 这里有可能返回一个普通值，或者又一个promise
}).then(data => {
  console.log(data) // 'next'
})