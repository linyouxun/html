var myApp = angular.module('myApp',[])
myApp.directive("hello",function(){
    return{
        restrict:'AECM',
        template:'<div>\hello my directive\</div>',
        replace:true
    }
});
myApp.directive('hello3',function(){
	return{
		restrict:'AECM',
		template:'<div><div ng-transclude></div>hello worlds<div ng-transclude></div></div>',
		transclude:true,
		replace:false
	}
})


myApp.directive('test',function(){
	return{
		restrict:"E",
		scope:{name:'@',case:'='},
		template:"<div><div ng-transclude></div>{{name}}nihao{{case.name}}</div>",
		transclude:true,
		replace:true
	}
})

//myApp.directive('myStyle',function(){
//	return function(scope,element,attrs){
//		element.css('background','#0000FF')
//	}
//})
myApp.directive("myStyle", function() {
	return function(scope, element, attrs) {
		element.bind("mouseenter", function() {
			element.css("background", "yellow");
		});
		element.bind("mouseleave", function() {
			element.css("background", "none");
		});
	}
});



myApp.directive('testClick',function(){
	return{
		restrict:"A",
		template:"<div><div ng-transclude></div>nihao</div>",
		transclude:true,
		replace:true
	}
})

myApp.controller('myCtrl',function($scope){
	$scope.list=[1,2,3,4,5]
	$scope.name="2"
	$scope.data={name:'lyx'}
})
