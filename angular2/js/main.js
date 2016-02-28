require.config({
	paths: {
		jquery:"jquery",
		angular: "angular",
		init: "init",
		test:'test'
	},
	shim: { 
        angular: {
            exports: 'angular'
        },
        test:{
        	exports:'test'
        }
    }
});

require(['jquery','angular','init','test'], function ($,angular,init){
	myPrint('nihao')
	console.log(angular);	
//	var app = angular.module('myApp',[]);
//	app.controller('myCtrl',function($scope){
//		console.log('text')
//	})
//	
//	//启动angular app
//	angular.bootstrap(document, ["myApp"]);
//	
//	
//　　console.log($(".div1").attr('style','background:red'));	

});

