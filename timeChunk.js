// 处理大量数据

// 比如一次给页面塞入1000个节点，浏览器吃不消，但是可以每隔 100ms塞入10个，可以尽量不阻塞主线程

/**
 * @param {*} arr 传入的数据
 * @param {*} fn 每次循环所要执行的函数
 * @param {*} count 一轮执行多少次函数
 * @param {*} delay 下一轮间隔多少s
 */

function timeChunk(arr, fn, count = 1, delay = 100) {

  function start() {
    for (let i = 0; i < Math.min(arr.length, count); i++) {
      // 取出数据
      let data = arr.shift();
      fn(data);
    }
  }

  return function () {
    let timeid;

    timedid = setInterval(() => {
      if (!arr.length) return clearInterval(timeid); // 注意这里的return 提前终止

      start();
    }, delay);
  }
}







