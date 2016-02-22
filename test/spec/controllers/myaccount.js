'use strict';

describe('Controller: MyAccountCtrl', function () {

  // load the controller's module
  beforeEach(module('progressApp'));

  var MyAccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyAccountCtrl = $controller('MyAccountCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyAccountCtrl.awesomeThings.length).toBe(3);
  });
});
