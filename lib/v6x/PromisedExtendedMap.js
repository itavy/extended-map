'use strict';

/**
 * ExtendedMap
 * native map wth a few enhancements
 * @memberOf itavy/extended-map
 */
class PromisedExtendedMap extends Map {
  /**
   * @param {itavy/extended-map.ExtendedMapOptions} [options={}] Map options
   */
  constructor(options = {}) {
    super();
    const {
      defaultValue = undefined,
      allowOverrite = true,
      doNotRejectHas = false,
      doNotRejectDelete = false,
    } = options;
    this.defaultValue = defaultValue;
    this.allowOverrite = allowOverrite;
    this.doNotRejectHas = doNotRejectHas;
    this.doNotRejectDelete = doNotRejectDelete;
  }

  /**
   * Promisified wrapper for get
   * @override
   * @returns {Promise.<*>} resolves with requested value or default value if none found
   * @public
   */
  get(key) {
    const keyValue = super.get(key);
    if (keyValue === undefined) {
      return Promise.resolve(this.defaultValue);
    }
    return Promise.resolve(keyValue);
  }

  /**
   * Promisified wrapper for set
   * it will resolve
   * @override
   * @returns {Promise.<PromisedExtendedMap>} resolves with the new map if overriting
   * is allowed or the key does not exists, otherwise it will reject with an error
   * @public
   */
  set(key, value) {
    return new Promise((resolve, reject) => {
      if (this.allowOverrite) {
        super.set(key, value);
        return resolve(this);
      }
      if (super.has(key)) {
        return reject(Error('Property overrite not allowed'));
      }
      super.set(key, value);
      return resolve(this);
    });
  }

  /**
   * Promisified wrapper for has
   * @override
   * @returns {Promise.<Boolean>} resolves with true if key exists or with false
   * if doNotRejectHas is set otherwise it will reject with an error
   * @public
   */
  has(key) {
    return new Promise((resolve, reject) => {
      if (super.has(key)) {
        return resolve(true);
      }
      if (this.doNotRejectHas) {
        return resolve(false);
      }
      // use toString method because if key is a Symbol it will throw
      return reject(Error(`Requested key not found: ${key.toString()}`));
    });
  }

  /**
   * Promisified wrapper for clear
   * @override
   * @returns {Promise.<undefined>} resolves on success
   * @public
   */
  clear() {
    return Promise.resolve(super.clear());
  }

  /**
   * Promisified wrapper for delete
   * @override
   * @returns {Promise.<Boolean>} resolves with true if key has been removed or with false
   * if doNotRejectDelete is set otherwise it will reject with an error
   * @public
   */
  delete(key) {
    return new Promise((resolve, reject) => {
      const delResult = super.delete(key);
      if (delResult) {
        return resolve(true);
      }
      if (this.doNotRejectDelete) {
        return resolve(false);
      }
      return reject(Error(`Error removing key ${key.toString()}`));
    });
  }

  /**
   * Promisified wrapper for values
   * @override
   * @returns {Promise.<Iterator>} resolves on success
   * @public
   */
  values() {
    return Promise.resolve(super.values());
  }

  /**
   * Iterate over all values and put them into an array
   * @returns {Promise.<Array>} resolves with an array with all values
   */
  valuesAsArray() {
    return new Promise((resolve) => {
      const valuesArray = [];
      const valuesIterator = super.values();
      let v = valuesIterator.next();
      while (!v.done) {
        valuesArray.push(v.value);
        v = valuesIterator.next();
      }
      return resolve(valuesArray);
    });
  }

  /**
   * Promisified wrapper for keys
   * @override
   * @returns {Promise.<Iterator>} resolves on success
   * @public
   */
  keys() {
    return Promise.resolve(super.keys());
  }

  /**
   * Iterate over all keys and put them into an array
   * @returns {Promise.<Array>} resolves with an array with all keys
   */
  keysAsArray() {
    return new Promise((resolve) => {
      const keysArray = [];
      const keysIterator = super.keys();
      let k = keysIterator.next();
      while (!k.done) {
        keysArray.push(k.value);
        k = keysIterator.next();
      }
      return resolve(keysArray);
    });
  }

  /**
   * Promisified wrapper for entries
   * @override
   * @returns {Promise.<Iterator>} resolves on success
   * @public
   */
  entries() {
    return Promise.resolve(super.entries());
  }

  /**
   * Iterate over all elements and put them into an array
   * @returns {Promise.<Array>} resolves with an array with all elements
   */
  entriesAsArray() {
    return new Promise((resolve) => {
      const entriesArray = [];
      const entriesIterator = super.entries();
      let e = entriesIterator.next();
      while (!e.done) {
        entriesArray.push(e.value);
        e = entriesIterator.next();
      }
      return resolve(entriesArray);
    });
  }

  /**
   * Promisified wrapper for forEach
   * @override
   * @returns {Promise.<undefined>} resolves on success
   * @public
   */
  forEach(callback, thisArg = null) {
    return new Promise((resolve) => {
      const entriesIterator = super.entries();
      let e = entriesIterator.next();
      while (!e.done) {
        callback.call(thisArg, e.value[0], e.value[1], this);
        e = entriesIterator.next();
      }
      return resolve();
    });
  }
}

module.exports = {
  PromisedExtendedMap,
};
