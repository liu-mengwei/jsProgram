// todo 离线实现还有点问题
const noop = function () { }

class EventBus {
  cache = {};
  offlineStack = []; // 离线事件列表

  on(key, fn = noop) {
    if (typeof fn !== 'function') {
      throw new Error('参数fn必须为函数');
    }

    if (!this.cache[key]) {
      this.cache[key] = [];
    }
    this.cache[key].push(fn);

    // 可以把这里的逻辑抽离出去
    let index = this.offlineStack.findIndex(item => item.key === key);
    if (index >= 0) {
      // 手动触发
      this.emit(key, ...this.offlineStack[index]['pay']);
      this.offlineStack.splice(index, 1);
    }
  }

  emit(key, ...args) {
    // 检查是否有人订阅了事件 如果没有，放在离线列表里
    if (!this.cache[key] && !this.offlineStack.find(item => item.key === key)) {
      this.offlineStack.push({ key, pay: args });
      return;
    }

    // 依次触发
    let fns = this.cache[key];
    for (let fn of fns) {
      fn.apply(null, args);
    }
  }

  off(key, fn) {
    if (!this.cache[key]) return false;

    if (typeof fn === 'undefined') {
      this.cache[key].length = 0; // 清空数组
      return true;
    }

    if (typeof fn === 'function') {
      // 从后往前遍历
      let fns = this.cache[key]
      for (let i = fns.length - 1; i >= 0; i--) {
        let item = fns[i];

        if (item === fn) {
          fns.splice(i, 1);
        }
      }

      return true;
    }

    return false;
  }

  one(key, fn) {
    this.on(key, (...args) => {
      fn.apply(null, args);
      this.off(key, fn);
    })
  }
}

let bus = new EventBus();

bus.emit('love', 'memeda');

bus.on('love', (pay) => {
  console.log(pay);
})


export default bus;