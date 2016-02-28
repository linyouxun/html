
var app = angular.module("myApp",[])


app.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('//')
	$interpolateProvider.endSymbol('//')
})

app.controller("myCtrl",["$scope","$interpolate",function($scope,$interpolate){
	this.label="nihaoya"
	$scope.test = "test"
}])



