// 实现promise.or 返回一个promise

// 举例
// [promise1, promise2, promise3] 参数 promises数组

// 假如promise1 为 true, 则立刻resovle() promise1的值  解释： 因为promise1是数组的第一个，已经是true的话，不需要管后面的promise是否返回
// 假如promise2 率先返回，也为true, 但这时候promise1 还没返回（但实际上最终会返回true）仍然需要返回promise1的值 也就是说需要保证这个顺序
// 3个promise都为false，reject
function or(promiseList) {
  let count = 0;
  let resolveCount = 0;
  let retList = promiseList.map(() => ({ state: 0 })); // 0是未返回 1是reject 2是resolve

  function check(i, resolve, reject) {
    // 当resolve的时候 前面还有结果没返回
    if (i === 0 || retList.slice(0, i - 1).every(item => item.state === 1)) {
      if (retList[i].state === 2) {
        resolve(retList[i].data);
      }
      // 当reject的时候 且 前面全部rejct 往后找第一个resolve的
      else if (retList[i].state === 1) {
        for (let j = i + 1; j < retList.length; j++) {
          if (retList[j].state === 2) {
            resolve(retList[j].data);
          } else if (retList[j].state === 0) {
            break;
          }
        }
      }
    }

    // 全部返回reject
    if (count === promiseList.length && resolveCount === 0) {
      reject();
    }
  }

  return new Promise((resolve, reject) => {
    promiseList.forEach((p, i) => {
      p.then((res) => {
        retList[i].state = 2;
        retList[i].data = res;

        count++;
        resolveCount++;
        check(i, resolve, reject);
      }).catch(() => {

        retList[i].state = 1;
        count++;
        check(i, resolve, reject);
      })
    })
  })
}