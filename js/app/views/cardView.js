(function (W) {
	'use strict';

	define([
		'ember',
		'text!tpl/card.hdb'
	], function (Ember, cardTpl) {
		var Handlebars = Ember.Handlebars,
				CardView;

		Ember.TEMPLATES['card'] = Handlebars.compile(cardTpl);

		CardView = Ember.View.extend({
			templateName: 'card'
		});

		return CardView;
	});

})(window);