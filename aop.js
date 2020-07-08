// 给函数动态添加职责

// 比如给一个函数加上埋点的功能，而不改变原函数

function before(fn, beforefn) {

  return function () {
    beforefn.apply(this, arguments);
    return fn.apply(this, arguments);
  }

}

// 也可以更改Funtion.prototype
// fn = fn.before(() => {});
// fn();

Function.prototype.before = function (beforefn) {
  let self = this;

  return function () {
    beforefn.apply(this, arguments);
    return self.apply(this, arguments);
  }
}




