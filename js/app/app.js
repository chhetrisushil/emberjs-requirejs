/*
 * app.js
 * Copyright (C) 2014 sushil <sushil@rogue>
 *
 * Distributed under terms of the MIT license.
 */
(function (W) {
    'use strict';
    
    require(['requireConfig'], function (config) {
    	
    	requirejs.config(config);

    	require([
	        'ember',
	        'app/appConfig'
	    ], function (Ember, AppConfig) {
	        var App;

	        App = Ember.Application.create(AppConfig);

	        return App;
	    });

    });

})(window);
