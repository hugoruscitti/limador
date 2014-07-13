var app = angular.module('app');


app.controller("AppCtrl", function($scope) {
  $scope.data = {};
  $scope.data.panel_visible = false;

  $scope.mostrar_panel = function() {
    $scope.data.panel_visible = !$scope.data.panel_visible;
  }

});
