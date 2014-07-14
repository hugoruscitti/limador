var app = angular.module('app');


app.controller("AppCtrl", function($scope) {
  $scope.data = {};
  $scope.data.panel_visible = false;
  $scope.data.fondos = [
    {
      miniatura: './backgrounds/test.png',
      video: './backgrounds/test.mov'
    },
    {
      miniatura: './backgrounds/otro.png',
      video: './backgrounds/otro.mov'
    },
  ];

  $scope.mostrar_panel = function() {
    $scope.data.panel_visible = !$scope.data.panel_visible;
  }

  $scope.seleccionar = function(obj) {
    $scope.data.video_seleccionado = obj.video;
    var video = document.getElementById('video');
    video.src = obj.video;
  }
});
