'use strict';

/**
 * ExtendedMap
 * native map wth a few enhancements
 * @memberOf itavy/extended-map
 */
class ExtendedMap extends Map {
  /**
   * @param {itavy/extended-map.ExtendedMapOptions} [options={}] Map options
   */
  constructor(options = {}) {
    super();
    const { defaultValue = undefined, allowOverrite = true } = options;
    this.defaultValue = defaultValue;
    this.allowOverrite = allowOverrite;
  }

  /**
   * Wrapper for get
   * if no value is found then default value will be returned
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get}
   * @override
   * @public
   */
  get(key) {
    return super.get(key) || this.defaultValue;
  }

  /**
   * Wrapper for set
   * if override is not allowed it will throw an error
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get}
   * @override
   * @public
   */
  set(key, value) {
    if (this.allowOverrite) {
      return super.set(key, value);
    }
    if (super.has(key)) {
      throw Error('Property overrite not allowed');
    }
    return super.set(key, value);
  }
}

module.exports = {
  ExtendedMap,
};
