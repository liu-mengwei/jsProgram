let test = [{ id: 1 }, { id: 2, parent: 1 }, { id: 3, parent: 2 }, { id: 4 }];

function merge(list) {
  const objMap = list.reduce((acc, item) => Object.assign(acc, { [item.id]: item }), {});

  return list.reduce((acc, item) => {
    if (!item.parent) {
      acc.push(item);
    } else {
      const parent = objMap[item.parent];
      delete item.parent;
      parent.children = parent.children || [];
      parent.children.push(item);
    }
    return acc;
  }, [])
}

merge(test);