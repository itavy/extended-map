'use strict';

/**
 * ExtendedMap
 * @param {*} [defaultValue=undefined] default value to be returned if none found
 * @param {Boolean} [allowOverrite=true] if it is allowed to overrite an existing key
 * @constructor
 */
const ExtendedMap =
  ({ defaultValue = undefined, allowOverrite = true } = {}) => new Proxy(new Map(), {
    get(obj, prop) {
      const origMethod = obj[prop];
      return function fGet(...args) {
        if (prop === 'get') {
          const result = origMethod.apply(obj, args);
          return result || defaultValue;
        }
        if (prop === 'set') {
          if (allowOverrite) {
            return origMethod.apply(obj, args);
          }
          if (obj.has(args[0])) {
            throw Error('Property overrite not allowed');
          }
          return origMethod.apply(obj, args);
        }
        return origMethod.apply(obj, args);
      };
    },
  });


module.exports = {
  ExtendedMap,
};
