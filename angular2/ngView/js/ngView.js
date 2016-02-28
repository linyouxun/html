

var app = angular.module('myApp',['ngRoute'])

app.controller('myCtrl',function($scope,$routeParams){
	$scope.text = $routeParams.name
})

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			template:'<h1>nihao<h1>'
		})
		.when('/text/:name',{
			template:'<h1>nihao{{text}}<h1>',
			controller:'myCtrl'
		})
		.otherwise({
			redirectTo:'/'
		})
})


