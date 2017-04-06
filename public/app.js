'use strict';

var app = angular.module("smartFridgeApp", ["firebase", "ui.bootstrap"]);

app.controller('mainCtrl', function($scope, $firebaseObject) {
  var ref = firebase.database().ref().child("ivan");
  $scope.data = $firebaseObject(ref);
});
