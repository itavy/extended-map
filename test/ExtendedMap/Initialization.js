'use strict';

const expect = require('@itavy/test-utilities').getExpect();
const ExtendedMap = require('../../lib/v6x/index').ExtendedMap;

describe('Initialization', () => {
  it('Should return an instance of Map', (done) => {
    const testMap = new ExtendedMap();
    expect(testMap).to.be.instanceOf(Map);
    done();
  });

  it('Set should work as before', (done) => {
    const testMap = Reflect.construct(ExtendedMap, []);
    expect(testMap.set('testKey', 'testVal')).to.be.instanceOf(Map);
    expect(testMap.has('testKey')).to.be.equal(true);
    done();
  });

  it('Get should work as before for existing value', (done) => {
    const testValue = Symbol('testSymbol');
    const testMap = Reflect.construct(ExtendedMap, []);
    testMap.set('testKey', testValue);
    const testGetValue = testMap.get('testKey');
    expect(testGetValue).to.be.equal(testValue);
    done();
  });

  it('Get should work as before for unexisting value', (done) => {
    const testValue = Symbol('testSymbol');
    const testMap = Reflect.construct(ExtendedMap, []);
    testMap.set('testKey', testValue);
    const testGetValue = testMap.get('testKey2');
    expect(testGetValue).to.be.an('undefined');
    done();
  });
});
