'use strict';

/**
 * @ngdoc function
 * @name progressApp.controller:MyAccountCtrl
 * @description
 * # MyAccountCtrl
 * Controller of the progressApp
 */
angular.module('progressApp')
  .controller('MyAccountCtrl', function ($scope, $uibModal) {
    var _this = this;

    _this.target = 125; // Default target
    _this.progress = 56; // Default progress

    /**
     * Open the progress modal.
     */
    _this.open = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/progress-modal.html',
        controller: 'ProgressModalCtrl',
        controllerAs: 'progressModal',
        size: 'md',
        resolve: {
          target: function () {
            return _this.target;
          },
          progress: function() {
            return _this.progress;
          }
        }
      }); // UI Bootstrap modal instance

      modalInstance.result
        .then(function() {
        }); // Open the modal
    };
  });
