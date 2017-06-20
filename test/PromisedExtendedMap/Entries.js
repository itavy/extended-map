'use strict';

const expect = require('@itavy/test-utilities').getExpect();
const sinon = require('@itavy/test-utilities').getSinon();
const PromisedMap = require('../../lib/v6x/index').PromisedMap;

let sandbox;

beforeEach((done) => {
  sandbox = sinon.sandbox.create();
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

