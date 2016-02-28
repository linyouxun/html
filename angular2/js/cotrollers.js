

'use strict';

var myCtrlApp = angular.module('myCtrlApp',['myFactory'])

myCtrlApp.controller('TestCtrl',function($scope,$rootScope,facetorytest){
	$scope.name = facetorytest.firstName + " " + facetorytest.lastName()
	$scope.name2 = $rootScope.name2
})

myCtrlApp.controller('myCtrl',function($scope,$rootScope){
	$rootScope.name2 = 'name2'
})
