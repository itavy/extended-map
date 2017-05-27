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

describe('KeysAsArray', () => {
  it('Should call PromisedMap entries with no parameters', () => {
    const keysAsArraySpy = sandbox.spy(PromisedMap.prototype, 'keys');
    return Reflect.construct(PromisedMap, [])
      .keysAsArray()
      .should.be.fulfilled
      .then(() => {
        expect(keysAsArraySpy.callCount).to.be.equal(1);
        expect(keysAsArraySpy.getCall(0).args.length).to.be.equal(0);

        return Promise.resolve();
      });
  });

  it('Should return an Array with expected values', () => {
    testMap = Reflect.construct(PromisedMap, []);
    const fixtureKeys = Object.keys(fixtures.testValues);

    const exepctedResponse = [
      fixtureKeys[0],
      fixtureKeys[1],
      fixtureKeys[2],
    ];

    return testMap.set(fixtureKeys[0], fixtures.testValues[fixtureKeys[0]])
      .then(m => m.set(fixtureKeys[1], fixtures.testValues[fixtureKeys[1]]))
      .then(m => m.set(fixtureKeys[2], fixtures.testValues[fixtureKeys[2]]))
      .then(m => m.keysAsArray())
      .should.be.fulfilled
      .then((response) => {
        expect(response).to.be.instanceof(Array);
        expect(response).to.be.eql(exepctedResponse);

        return Promise.resolve();
      });
  });
});

