(function (W) {
	'use strict';

	define([
		'ember',
		'text!tpl/list.hdb'
	], function (Ember, listTpl) {
		var Handlebars = Ember.Handlebars,
			ListView;

		ListView = Ember.View.extend({
			template: Handlebars.compile(listTpl)
		});

		return ListView;
	});

})(window);
