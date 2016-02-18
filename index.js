const Immutable = require('immutable');

module.exports = {
  rules: Immutable.Map({
    '111': '1',
    '110': '0',
    '101': '0',
    '100': '0',
    '011': '1',
    '010': '0',
    '001': '0',
    '000': '1'
  }),
  firstRow: Immutable.fromJS('11011'),
  generator: generateNextRow
};

function generateNextRow (rules, previousRow) {
  return previousRow.split('').reduce(reducer.bind(null, rules), '');
}

function reducer (rules, result, middle, index, array) {
  result += rules.get(getPattern(index, array));
  return result;
}

function getPattern (index, array) {
  const newArray = Immutable.fromJS(array).push('1').unshift('1');
  return newArray.get(index)+ newArray.get(index + 1) + newArray.get(index + 2);
}
