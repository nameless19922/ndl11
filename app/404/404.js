'use strict';

angular.module('myApp.404', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            templateUrl: '404/404.html',
            controller: '404Ctrl'
        });
    }])

    .controller('404Ctrl', ['$scope', '$location', function ($scope, $location) {
        $scope.back = function() {
            history.back();
        };

        $scope.path = $location.path();
    }]);