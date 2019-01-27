'use strict';

const { expect, getSinonSandbox } = require('@itavy/test-utilities');
const { PromisedMap } = require('../../lib/latest');
const fixtures = require('./Fixtures');

let testMap;
let sandbox;

beforeEach((done) => {
  sandbox = getSinonSandbox();
  done();
});

afterEach((done) => {
  sandbox.restore();
  done();
});

describe('Get', () => {
  it('Should call Map get with expected parameters', () => {
    const getSpy = sandbox.spy(Map.prototype, 'get');
    return Reflect.construct(PromisedMap, []).get('testKey')
      .should.be.fulfilled
      .then(() => {
        expect(getSpy.callCount).to.be.equal(1);
        expect(getSpy.getCall(0).args.length).to.be.equal(1);
        expect(getSpy.getCall(0).args[0]).to.be.equal('testKey');

        return Promise.resolve();
      });
  });

  it('Should return an expected value if requested key is set', () => {
    testMap = Reflect.construct(PromisedMap, []);
    testMap.set('testKey1', fixtures.testValues.testKey1);
    return testMap.get('testKey1')
      .should.be.fulfilled
      .then((response) => {
        expect(response).to.be.equal(fixtures.testValues.testKey1);

        return Promise.resolve();
      });
  });

  it('Should return undefined if requested key is not set and defaultValue not set',
    () => Reflect.construct(PromisedMap, []).get('testKey1')
      .should.be.fulfilled
      .then((response) => {
        expect(response).to.be.equal(undefined);

        return Promise.resolve();
      }));

  it('Should return defaultValue if requested key is not set',
    () => Reflect.construct(PromisedMap, [{ defaultValue: fixtures.defaultValue }])
      .get('testKey1')
      .should.be.fulfilled
      .then((response) => {
        expect(response).to.be.equal(fixtures.defaultValue);

        return Promise.resolve();
      }));
});
