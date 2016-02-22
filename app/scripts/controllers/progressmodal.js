'use strict';

/**
 * @ngdoc function
 * @name progressApp.controller:ProgressModalCtrl
 * @description
 * # ProgressModalCtrl
 * Controller of the progressApp
 */
angular.module('progressApp')
  .controller('ProgressModalCtrl', function ($scope, target, progress, $timeout) {
    var _this = this;

    _this.target = (target > 0) ? target : 0;
    _this.progress = 0; // Use a different var for the progress bar so we can start it at 0...

    /**
     * Set the marker position.
     */
    _this.setMarkerPosition = function() {
      var percentage = _this.progress / _this.target * 100;

      if (_this.progress > _this.target) { // If they've exceeded the target...
        percentage = 100; // Just stick with 100 so we don't move past the end of the progress bar
      }

      _this.markerPosition = percentage + '%';
    };

    _this.setMarkerPosition();

    /*
     * Watch for changes in the progress...
     */
    $scope.$watch(function() {
        return _this.progress;
      }, function(newValue, oldValue) {
        if (newValue !== oldValue) {
          _this.setMarkerPosition(); // Set the marker position if it changed
        }
      });

    $timeout(function() {
      _this.progress = (progress > 0) ? progress : 0;
    }, 300); // Wait just a bit and then set the progress
  });
