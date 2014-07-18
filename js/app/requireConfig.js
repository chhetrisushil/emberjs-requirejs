(function (W) {
	define({
	    baseUrl: '/',
	    paths: {
	        'jQuery': 'libs/jquery-1.10.2.min',
	        'text': 'libs/text',
	        'handlebars': 'libs/handlebars',
	        'ember': 'libs/ember',
	        'tpl': 'app/templates',
	        'routes': 'app/routes',
	        'views': 'app/views'
	    },

	    shim: {
	        jQuery: {
	            exports: '$'
	       },

	        ember: {
	            deps: ['jQuery', 'handlebars'],
	            exports: 'Ember'
	        }
	    }
	});
})(window);