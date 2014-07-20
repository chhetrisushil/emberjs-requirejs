(function (W) {
	'use strict';

	define([
		'ember',
		'text!tpl/card.hdb'
	], function (Ember, cardTpl) {
		var Handlebars = Ember.Handlebars,
		    CardView;

		CardView = Ember.View.extend({
			template: Handlebars.compile(cardTpl)
		});

		return CardView;
	});

})(window);
