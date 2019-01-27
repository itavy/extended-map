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

describe('Keys', () => {
  it('Should call Map keys with no parameters', () => {
    const keysSpy = sandbox.spy(Map.prototype, 'keys');
    return Reflect.construct(PromisedMap, [])
      .keys()
      .should.be.fulfilled
      .then(() => {
        expect(keysSpy.callCount).to.be.equal(1);
        expect(keysSpy.getCall(0).args.length).to.be.equal(0);

        return Promise.resolve();
      });
  });

  it('Should return an iterator',
    () => Reflect.construct(PromisedMap, [])
      .keys()
      .should.be.fulfilled
      .then((response) => {
        expect(response.next().done).to.be.equal(true);

        return Promise.resolve();
      }));
});
