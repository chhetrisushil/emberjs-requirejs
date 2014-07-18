(function (W) {
	'use strict';

	define([
		'ember'
	], function (Ember) {
		var ItemRoute = Ember.Route.extend({
			model: function (params) {
				return params.itemId;
			}
		});

		return ItemRoute;
	});

})(window);