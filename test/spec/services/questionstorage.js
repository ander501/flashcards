'use strict';

describe('Service: questionStorage', function () {

  // load the service's module
  beforeEach(module('flashApp'));

  // instantiate service
  var questionStorage;
  beforeEach(inject(function (_questionStorage_) {
    questionStorage = _questionStorage_;
  }));

  it('should do something', function () {
    expect(!!questionStorage).toBe(true);
  });

});
