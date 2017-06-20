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

