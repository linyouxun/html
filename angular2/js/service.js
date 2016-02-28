
'use strict'

var myFactory = angular.module('myFactory',[])

myFactory.factory('facetorytest',['$window',
	function($window){
		var test = {
			firstName:'tank',
			lastName:function(){
				return 'lin';
			}
		}
		return test
}])

//myFactory.factory('facetorytest', ['$window',         //factory方式
//  function($window){
//      var test = {
//          firstname:"tank",
//          lastname:function(){
//              return "zhang";
//          }
//      };
//      $window.alert('aaaa');         //内置服务可以注入
//      return test;
//  }
//]);


