(function() {
  'use strict';

  angular.module('ModuleOneApp', ['ngMaterial'])
  .config(function($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('mytheme').primaryPalette('blue').accentPalette('blue-grey');
  })
  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];

  function LunchCheckerController($scope) {
    $scope.lunchItems = '';
    $scope.message = '';
    $scope.messageClass = '';

    $scope.checkIfTooMuch = function() {
      var lunchItems = $scope.lunchItems.trim();

      // reset the message
      $scope.message = '';
      $scope.messageClass = '';

      if (lunchItems === undefined || lunchItems == '') {
        $scope.message = 'Please enter data first';
        $scope.messageClass = 'message-warn';
      } else {
        var items = lunchItems.split(',');
        var itemCount = 0;

        // count only items that are not empty
        for(var i = 0; i < items.length; i++) {
          var item = items[i].trim();
          if(item !== undefined && item != '') {
            itemCount++;
          }
        }

        if(itemCount > 0) {
          if(itemCount <= 3) {
            $scope.message = 'Enjoy!';
          } else {
            $scope.message = 'Too much!';
          }

          $scope.messageClass = 'message-ok';
        } else {
          $scope.message = 'Please enter REAL data first';
          $scope.messageClass = 'message-warn';
        }
      }
    }
  }
})();
