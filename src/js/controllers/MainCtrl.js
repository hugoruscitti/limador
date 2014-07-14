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

    {
      miniatura: './backgrounds/circulos.png',
      video: './backgrounds/circulos.mp4'
    },

    {
      miniatura: './backgrounds/nieve.png',
      video: './backgrounds/nieve.mp4'
    },

    {
      miniatura: './backgrounds/nubes.png',
      video: './backgrounds/nubes.mp4'
    },

    {
      miniatura: './backgrounds/rio.png',
      video: './backgrounds/rio.mp4'
    },
  ];

  $scope.ocultar_panel = function() {
    $scope.data.panel_visible = false;
  }

  $scope.alternar_panel = function() {
    $scope.data.panel_visible = !$scope.data.panel_visible;
  }

  $scope.seleccionar = function(obj) {
    $scope.data.video_seleccionado = obj.video;
    var video = document.getElementById('video');
    video.src = obj.video;
  }
});
