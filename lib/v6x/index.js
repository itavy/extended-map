'use strict';

/**
 * @external Map
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map}
 */

/**
 * @namespace itavy/extended-map
 */
/**
 * @typedef {Object} ExtendedMapOptions
 * @property {*} [defaultValue=undefined] default value to return when none is found
 * @property {Boolean} [allowOverrite=true] if it is allowed to overrite an existing key
 */

const ExtendedMap = require('./ExtendedMap').ExtendedMap;

module.exports = {
  ExtendedMap,
};
