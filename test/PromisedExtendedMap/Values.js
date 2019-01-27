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

describe('Values', () => {
  it('Should call Map values with no parameters', () => {
    const valuesSpy = sandbox.spy(Map.prototype, 'values');
    return Reflect.construct(PromisedMap, [])
      .values()
      .should.be.fulfilled
      .then(() => {
        expect(valuesSpy.callCount).to.be.equal(1);
        expect(valuesSpy.getCall(0).args.length).to.be.equal(0);

        return Promise.resolve();
      });
  });

  it('Should return an iterator',
    () => Reflect.construct(PromisedMap, [])
      .values()
      .should.be.fulfilled
      .then((response) => {
        expect(response.next().done).to.be.equal(true);

        return Promise.resolve();
      }));
});
