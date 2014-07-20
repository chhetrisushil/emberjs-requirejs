(function (W) {
	'use strict';

	define([
		'ember'
	], function (Ember) {
		var Router;

		Router = Ember.Router.extend()

		Router.map(function () {
			var _self = this;

			_self.route('index', {path: '/'});
			_self.route('card', {path: '/card/'});
			_self.resource('list', {path: '/list/'}, function () {
                this.resource('item', {path: '/:itemId/'}, function () {
                    this.route('name', {path: '/:name'});
                });
			});
		});

		return Router;
	});

})(window);
