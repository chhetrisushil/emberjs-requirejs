(function (W) {
	'use strict';

	define([
		'ember',
		'models/listModel'
	], function (Ember, ListModel) {
		var ListRoute;

		ListRoute = Ember.Route.extend({
			model: function () {
                return ListModel;
			}
		});

		return ListRoute;
	});

})(window);
