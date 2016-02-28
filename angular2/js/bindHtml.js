

var app = angular.module('myApp',['ngSanitize'])

app.controller('myCtrl',["$scope",function($scope){
	$scope.test = "test"
	$scope.dataHtml="ssss"
	$scope.data="s"
}])
