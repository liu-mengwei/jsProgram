
// [{id:1}, {id:2, parentid: 1} , {id: 3, parentid: 2}, {id: 4, parentid: 1}]

// 合并节点
// [{id: 1, children:[{id:2,children:[{id:3}]}]}]

function mergeNode(nodeList) {
  while (nodeList.length > 1) {
    let set = getParentList(nodeList);

    // 找出叶子节点并插入
    for (let i = nodeList.length - 1; i >= 0; i--) {
      if (isLeaf(set, nodeList[i].id)) {
        // 找到parentid 并插入 我去不是吧，又得写一次循环吗
        insertNode(nodeList, nodeList[i]);
        nodeList.splice(i, 1);
      }
    }
  }
}

function insertNode(nodeList, childnode) {
  for (let node of nodeList) {
    if (node.id === childnode.parentid) {
      if (node.children) {
        node.children.push(childnode);
      } else {
        node.children = [childnode];
      }
    }
  }
}

// 需要用这个判断是不是叶子节点
function getParentList(nodeList) {
  let set = new Set();
  nodeList.forEach(node => {
    set.add(node.parentid);
  });
  return set;
}

function isLeaf(set, nodeid) {
  return !set.has(nodeid);
}