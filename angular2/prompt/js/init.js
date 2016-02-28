define(["jquery","bootstrap"],function($,bootstrap){
	console.log('nihao')
	$(document).ready(function () {
		$('.tooltip-demo').tooltip({
		    selector: "[data-toggle=tooltip]",
		    container: "body"
		});	
	});
})