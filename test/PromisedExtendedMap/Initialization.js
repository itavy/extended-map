'use strict';

const expect = require('@itavy/test-utilities').getExpect();
const PromisedMap = require('../../lib/v6x/index').PromisedMap;

describe('Initialization', () => {
  it('Should return an instance of Map', (done) => {
    const testMap = Reflect.construct(PromisedMap, []);
    expect(testMap).to.be.instanceOf(Map);
    done();
  });

  it('Should have default properties', (done) => {
    const testMap = Reflect.construct(PromisedMap, []);
    expect(testMap).to.have.property('defaultValue', undefined);
    expect(testMap).to.have.property('allowOverrite', true);
    expect(testMap).to.have.property('doNotRejectHas', false);
    expect(testMap).to.have.property('doNotRejectDelete', false);
    done();
  });

  it('Should use provided values from constructor', (done) => {
    const mapOptions = {
      defaultValue:      Symbol('1'),
      allowOverrite:     false,
      doNotRejectHas:    true,
      doNotRejectDelete: true,
    };
    const testMap = Reflect.construct(PromisedMap, [mapOptions]);
    expect(testMap).to.have.property('defaultValue', mapOptions.defaultValue);
    expect(testMap).to.have.property('allowOverrite', mapOptions.allowOverrite);
    expect(testMap).to.have.property('doNotRejectHas', mapOptions.doNotRejectHas);
    expect(testMap).to.have.property('doNotRejectDelete', mapOptions.doNotRejectDelete);
    done();
  });
});
