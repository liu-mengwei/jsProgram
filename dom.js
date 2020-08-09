
// 遍历深度遍历所有元素节点
function deep(node) {

  if (!node) return;

  // 打印
  console.log(node.tagName);

  let children = Array.from(node.children);
  for (let child of children) {
    deep(child);
  }
}

deep(document);