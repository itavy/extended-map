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

describe('Entries', () => {
  it('Should call Map entries with no parameters', () => {
    const entriesSpy = sandbox.spy(Map.prototype, 'entries');
    return Reflect.construct(PromisedMap, [])
      .entries()
      .should.be.fulfilled
      .then(() => {
        expect(entriesSpy.callCount).to.be.equal(1);
        expect(entriesSpy.getCall(0).args.length).to.be.equal(0);

        return Promise.resolve();
      });
  });

  it('Should return an iterator',
    () => Reflect.construct(PromisedMap, [])
      .entries()
      .should.be.fulfilled
      .then((response) => {
        expect(response.next().done).to.be.equal(true);

        return Promise.resolve();
      }));
});
