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

describe('Clear', () => {
  it('Should call Map clear with no parameters', () => {
    const clearSpy = sandbox.spy(Map.prototype, 'clear');
    return Reflect.construct(PromisedMap, [])
      .clear()
      .should.be.fulfilled
      .then(() => {
        expect(clearSpy.callCount).to.be.equal(1);
        expect(clearSpy.getCall(0).args.length).to.be.equal(0);

        return Promise.resolve();
      });
  });

  it('Should resolve with undefined', () => Reflect.construct(PromisedMap, [])
    .clear()
    .should.be.fulfilled
    .then((response) => {
      expect(response).to.be.equal(undefined);

      return Promise.resolve();
    }));

  it('Should clear the map', () => {
    testMap = Reflect.construct(PromisedMap, []);
    const fixtureKeys = Object.keys(fixtures.testValues);
    return testMap.set(fixtureKeys[0], fixtures.testValues[fixtureKeys[0]])
      .then(m => m.set(fixtureKeys[1], fixtures.testValues[fixtureKeys[1]]))
      .then(m => m.set(fixtureKeys[2], fixtures.testValues[fixtureKeys[2]]))
      .then(m => m.clear())
      .should.be.fulfilled
      .then(() => testMap.entries())
      .then((response) => {
        expect(response.next().done).to.be.equal(true);
        expect(testMap.size).to.be.equal(0);

        return Promise.resolve();
      });
  });
});
