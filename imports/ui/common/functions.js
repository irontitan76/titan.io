import _ from 'underscore';

export const orderOfElements = order => _.map(order, item => {
  const name = typeof item === 'string' ? item : item.name;
  return {
    functionName: `render${name[0].toUpperCase()}${name.substring(1)}`,
    opts: item.opts || {}
  };
});

export const renderOrderOfElements = (base, order) => _.map(
  orderOfElements(order),
  (element, key) => base[element.functionName](key, element.opts)
);