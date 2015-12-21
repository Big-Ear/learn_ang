'use strict';

/* Controllers */

var todoList = angular.module('todoList', [])
  .controller('TabsCtrl', ['$scope', function($scope) {
    $scope.tabs = [{
      title: 'ToDo',
      url: 'one.tpl.html'
    }, {
      title: 'Done',
      url: 'two.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function(tab) {
      $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
      return tabUrl == $scope.currentTab;
    }
  }])
  .controller('ListItemCtrl', ['$scope', function($scope) {
    $scope.list = ["Go to cinema", "print photoshop lessons "];
  }])
  .controller('addingNewItemCtrl', ['$scope', function($scope) {
    $scope.toDo = "try something to do";
    $scope.addItem = function() {
      console.log($scope.list[0]);
      // $scope.list.push("something");
      alert($scope.list);

    }
  }]);
