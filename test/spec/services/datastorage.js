'use strict';

describe('Service: datastorage', function () {

  // load the service's module
  beforeEach(module('flashApp'));

  // instantiate service
  var datastorage;
  beforeEach(inject(function (_datastorage_) {
    datastorage = _datastorage_;
  }));

  it('should do something', function () {
    expect(!!datastorage).toBe(true);
  });

});
