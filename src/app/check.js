angular.module('formExample', [])
    .controller('ExampleController',['$scope', function ($scope) {
      $scope.sa = {};
      $scope.ba = {};
      $scope.update = function()
      {
        if ($scope.sameAddress) {
          $scope.ba = {};

        }
        else {
          $scope.ba = $scope.sa;
        }
      };
    }]); 
    