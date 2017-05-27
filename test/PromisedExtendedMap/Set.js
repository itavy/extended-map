'use strict';

const expect = require('@itavy/test-utilities').getExpect();
const sinon = require('@itavy/test-utilities').getSinon();
const PromisedMap = require('../../lib/v6x/index').PromisedMap;
const fixtures = require('./Fixtures');

let testMap;
let sandbox;

beforeEach((done) => {
  sandbox = sinon.sandbox.create();
  done();
});

afterEach((done) => {
  sandbox.restore();
  done();
});

describe('Set', () => {
  it('Should call Map set with expected parameters', () => {
    const setSpy = sandbox.spy(Map.prototype, 'set');
    const keyName = 'testKey1';
    return Reflect.construct(PromisedMap, []).set(keyName, fixtures.testValues[keyName])
      .should.be.fulfilled
      .then(() => {
        expect(setSpy.callCount).to.be.equal(1);
        expect(setSpy.getCall(0).args.length).to.be.equal(2);
        expect(setSpy.getCall(0).args[0]).to.be.equal(keyName);
        expect(setSpy.getCall(0).args[1]).to.be.equal(fixtures.testValues[keyName]);

        return Promise.resolve();
      });
  });

  it('Should call Map has with expected parameters', () => {
    const setSpy = sandbox.spy(Map.prototype, 'has');
    const keyName = 'testKey1';
    return Reflect.construct(PromisedMap, [{ allowOverrite: false }])
      .set(keyName, fixtures.testValues[keyName])
      .should.be.fulfilled
      .then(() => {
        expect(setSpy.callCount).to.be.equal(1);
        expect(setSpy.getCall(0).args.length).to.be.equal(1);
        expect(setSpy.getCall(0).args[0]).to.be.equal(keyName);

        return Promise.resolve();
      });
  });

  it('Should resolve with same instance', () => {
    testMap = Reflect.construct(PromisedMap, []);
    return testMap.set('testKey1', fixtures.testValues.testKey1)
      .should.be.fulfilled
      .then((response) => {
        expect(response).to.be.equal(testMap);

        return Promise.resolve();
      });
  });

  it('Should allow update of an existing key - default behaviour', () => {
    const keyName = 'testKey1';
    testMap = Reflect.construct(PromisedMap, []);
    testMap.set(keyName, fixtures.testValues[keyName]);
    return testMap.set(keyName, fixtures.testValues.testKey2)
      .should.be.fulfilled
      .then(response => response.get(keyName))
      .then((keyValue) => {
        expect(keyValue).to.be.equal(fixtures.testValues.testKey2);

        return Promise.resolve();
      });
  });

  it('Should reject update of an existing key', () => {
    const keyName = 'testKey1';
    testMap = Reflect.construct(PromisedMap, [{ allowOverrite: false }]);
    testMap.set(keyName, fixtures.testValues[keyName]);
    return testMap.set(keyName, fixtures.testValues.testKey2)
      .should.be.rejected
      .then((error) => {
        expect(error).to.be.an('error');
        expect(error.message).to.be.equal('Property overrite not allowed');

        return Promise.resolve();
      });
  });

  it('Should not update a key', () => {
    const keyName = 'testKey1';
    testMap = Reflect.construct(PromisedMap, [{ allowOverrite: false }]);
    testMap.set(keyName, fixtures.testValues[keyName]);
    return testMap.set(keyName, fixtures.testValues.testKey2)
      .should.be.rejected
      .then(() => testMap.get(keyName))
      .then((keyValue) => {
        expect(keyValue).to.be.equal(fixtures.testValues[keyName]);

        return Promise.resolve();
      });
  });
});
