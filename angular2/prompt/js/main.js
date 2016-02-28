

require.config({
	paths: {
		jquery:"jquery-2.1.1.min",
		init:"init",
		bootstrap:"bootstrap.min"
	},
	shim: { 
        bootstrap: {
        	deps: ["jquery"],
            exports: 'bootstrap'
        }
    }
});

require(['jquery','bootstrap','init'], function ($,bootstrap,init){
	
});

