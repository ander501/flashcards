'use strict';

describe('Controller: DeckfilterCtrl', function () {

  // load the controller's module
  beforeEach(module('flashApp'));

  var DeckfilterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeckfilterCtrl = $controller('DeckfilterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeckfilterCtrl.awesomeThings.length).toBe(3);
  });
});
