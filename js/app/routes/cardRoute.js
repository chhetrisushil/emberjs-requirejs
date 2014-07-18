(function (W) {
	'use strict';

	define([
	'ember'
	], function (Ember) {
		var CardRoute = Ember.Route.extend({
        model: function () {
        	return {name: 'sushil'};
        }
    });

    return CardRoute;
	});

})(window);