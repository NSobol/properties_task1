export default function orderByProps(obj, rules) {
  const arr = [];
  // создание отсортированного массива из свойств объекта
  const sortObj = Object.keys(obj).sort();
  const getPushArr = () => {
    for (const elem of sortObj) {
      arr.push({ key: elem, value: obj[elem] });
    }
  };
  // если правило сортировки не передано
  if (!rules) {
    getPushArr();
    return arr;
  }

  // создание сортированного массива по переданному правилу
  for (const key in obj) {
    if (rules.includes(key)) {
      arr[rules.indexOf(key)] = { key, value: obj[key] };
      sortObj.splice(sortObj.indexOf(key), 1);
    }
  }
  getPushArr();
  return arr;
}