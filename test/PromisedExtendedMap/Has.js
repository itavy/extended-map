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

describe('Has', () => {
  it('Should call Map has with expected parameters', () => {
    const hasSpy = sandbox.spy(Map.prototype, 'has');
    return Reflect.construct(PromisedMap, []).has('testKey')
      .should.be.rejected
      .then(() => {
        expect(hasSpy.callCount).to.be.equal(1);
        expect(hasSpy.getCall(0).args.length).to.be.equal(1);
        expect(hasSpy.getCall(0).args[0]).to.be.equal('testKey');

        return Promise.resolve();
      });
  });

  it('Should respond with false if doNotRejectHas is set',
    () => Reflect.construct(PromisedMap, [{ doNotRejectHas: true }])
      .has('testKey')
      .should.be.fulfilled
      .then((response) => {
        expect(response).to.be.equal(false);

        return Promise.resolve();
      }));

  it('Should reject with expected error if key is not set',
    () => Reflect.construct(PromisedMap, [])
      .has('testKey')
      .should.be.rejected
      .then((error) => {
        expect(error).to.be.an('error');
        expect(error.message).to.be.equal('Requested key not found: testKey');

        return Promise.resolve();
      }));

  it('Should respond with true if key exists', () => {
    testMap = Reflect.construct(PromisedMap, []);
    testMap.set('testKey1', fixtures.testValues.testKey1);
    return testMap.has('testKey1')
      .should.be.fulfilled
      .then((response) => {
        expect(response).to.be.equal(true);

        return Promise.resolve();
      });
  });
});
