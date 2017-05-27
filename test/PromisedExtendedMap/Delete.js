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

describe('Delete', () => {
  it('Should call Map delete with expected parameters', () => {
    const deleteSpy = sandbox.spy(Map.prototype, 'delete');
    const keyName = 'testKey1';
    return Reflect.construct(PromisedMap, [])
      .delete(keyName)
      .should.be.rejected
      .then(() => {
        expect(deleteSpy.callCount).to.be.equal(1);
        expect(deleteSpy.getCall(0).args.length).to.be.equal(1);
        expect(deleteSpy.getCall(0).args[0]).to.be.equal(keyName);

        return Promise.resolve();
      });
  });

  it('Should reject with expected error - default behaviour',
    () => Reflect.construct(PromisedMap, [])
      .delete('testKeyToBeDeleted')
      .should.be.rejected
      .then((error) => {
        expect(error).to.be.an('error');
        expect(error.message).to.be.equal('Error removing key testKeyToBeDeleted');

        return Promise.resolve();
      }));

  it('Should resolve with false if doNotRejectDelete is set',
    () => Reflect.construct(PromisedMap, [{ doNotRejectDelete: true }])
      .delete('testKeyToBeDeleted')
      .should.be.fulfilled
      .then((response) => {
        expect(response).to.be.equal(false);

        return Promise.resolve();
      }));

  it('Should resolve with true if key exists', () => {
    const keyName = 'testKey1';
    testMap = Reflect.construct(PromisedMap, []);
    testMap.set(keyName, fixtures.testValues[keyName]);
    return testMap.delete(keyName)
      .should.be.fulfilled
      .then((response) => {
        expect(response).to.be.equal(true);

        return Promise.resolve();
      });
  });

  it('Should remove the key', () => {
    const keyName = 'testKey1';
    testMap = Reflect.construct(PromisedMap, []);
    testMap.set(keyName, fixtures.testValues[keyName]);
    return testMap.delete(keyName)
      .should.be.fulfilled
      .then(() => testMap.get(keyName))
      .then((response) => {
        expect(response).to.be.equal(undefined);

        return Promise.resolve();
      });
  });
});
