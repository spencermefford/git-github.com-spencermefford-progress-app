'use strict';

describe('Controller: ProgressModalCtrl', function () {

  // load the controller's module
  beforeEach(module('progressApp'));

  var ProgressModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgressModalCtrl = $controller('ProgressModalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProgressModalCtrl.awesomeThings.length).toBe(3);
  });
});
