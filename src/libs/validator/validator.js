module.exports = (pattern, data = new Object(), strict = true) => {
  let toArray = pattern.map(el => el.field);
  let valid = [];
  let n = 0;
  for (key in data) {
    valid.push(new RegExp(pattern[toArray.indexOf(key)].regex).test(data[key]));
    n++;
  }
  let ret = valid.indexOf(false) !== -1 ? false : true;
  return strict ? ret && n === toArray.length : ret;
};
