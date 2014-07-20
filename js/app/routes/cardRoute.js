(function (W) {
	'use strict';

	define([
	'ember',
	'models/cardModel'
	], function (Ember, CardModel) {
		var CardRoute = Ember.Route.extend({
                model: function () {
        	        return CardModel;
                }
            });

        return CardRoute;
	});

})(window);
