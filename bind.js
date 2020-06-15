/**
 * 采用call, apply实现bind
 */
function bind(fn, context) {
  function boundFn() {
    fn.apply(context, arguments);
  }

  return boundFn;
}
