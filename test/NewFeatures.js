'use strict';

const expect = require('@itavy/test-utilities').getExpect();
const extendedMap = require('../lib/v6x/index').ExtendedMap;

describe('New features', () => {
  it('Should not overrite existing key', (done) => {
    const testMap = extendedMap({ allowOverrite: false });
    testMap.set('testKey', 'testValue');
    // eslint-disable-next-line require-jsdoc
    const testSet = () => testMap.set('testKey', 'testValue2');
    expect(testSet).to.throw(Error, 'Property overrite not allowed');
    done();
  });

  it('Should return default value for nonexisting key', (done) => {
    const defaultValue = Symbol('defaultValue');
    const testMap = extendedMap({
      defaultValue,
    });
    testMap.set('testKey', 'testValue');
    const getValue = testMap.get('unknownKey');
    expect(getValue).to.be.equal(defaultValue);
    done();
  });
});
