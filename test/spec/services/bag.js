'use strict';

describe('Service: bag', function () {

  // load the service's module
  beforeEach(module('flashApp'));

  // instantiate service
  var Bag;
  var testBag;

  beforeEach(inject(function (_Bag_) {
    Bag = _Bag_;
  }));

  it('should detect an empty bag', function () {
    expect(!!Bag).toBe(true);
    testBag = new Bag();
    expect( testBag.isEmpty()).toBe(true);
  });

  it('should throw exception when attempting to pull from empty bag', function () {
    expect(!!Bag).toBe(true);
    testBag = new Bag();
    expect( function() { return testBag.pop(); } ).toThrowError(testBag.EmptyException);
  });

  it('should return the last item in the bag', function () {
    var object = {
      test: "testProperty"
    };
    expect(!!Bag).toBe(true);
    testBag = new Bag();
    testBag.push(object);
    expect(testBag.pop()).toBe(object); 
  });

  it('should count the number of items correctly', function () {
    expect(!!Bag).toBe(true);
    testBag = new Bag();
    expect(testBag.size()).toBe(0);
    testBag.push(1);
    expect(testBag.size()).toBe(1);
    testBag.push(2);
    expect(testBag.size()).toBe(2);
    testBag.pop();
    expect(testBag.size()).toBe(1);
  });
});
