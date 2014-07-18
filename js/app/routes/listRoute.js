(function (W) {
	'use strict';

	define([
		'ember'
	], function (Ember, listTpl) {
		var ListRoute;

		ListRoute = Ember.Route.extend({
			model: function () {
				return [
					{
						id: 1,
						label: '1'
					},
					{
						id: 2,
						label: '2'
					},
					{
						id: 3,
						label: '3'
					},
					{
						id: 4,
						label: '4'
					},
					{
						id: 5,
						label: '5'
					},
					{
						id: 6,
						label: '6'
					}
				];
			}
		});

		return ListRoute;
	});

})(window);