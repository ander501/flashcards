'use strict';

describe('Service: cardfilter', function () {

  // load the service's module
  beforeEach(module('flashApp'));

  // instantiate service
  var cardfilter;
  beforeEach(inject(function (_cardfilter_) {
    cardfilter = _cardfilter_;
  }));

  it('should do something', function () {
    expect(!!cardfilter).toBe(true);
  });

});
