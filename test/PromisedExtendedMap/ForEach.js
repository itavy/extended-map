'use strict';

const { expect, getSinonSandbox } = require('@itavy/test-utilities');
const { PromisedMap } = require('../../lib/latest');

let sandbox;

beforeEach((done) => {
  sandbox = getSinonSandbox();
  done();
});

afterEach((done) => {
  sandbox.restore();
  done();
});

describe('ForEach', () => {
  it('Should call Map forEach with no parameters', () => {
    const forEachSpy = sandbox.spy(Map.prototype, 'forEach');
    const thisArg = {};
    const functionToRun = function fFunctionToRun() {
      return null;
    };
    return Reflect.construct(PromisedMap, [])
      .forEach(functionToRun, thisArg)
      .should.be.fulfilled
      .then(() => {
        expect(forEachSpy.callCount).to.be.equal(1);
        expect(forEachSpy.getCall(0).args.length).to.be.equal(2);
        expect(forEachSpy.getCall(0).args[0]).to.be.equal(functionToRun);
        expect(forEachSpy.getCall(0).args[1]).to.be.equal(thisArg);

        return Promise.resolve();
      });
  });
});
