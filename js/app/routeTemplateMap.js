(function (W) {
	'use strict';

	define([
		'jQuery',
		'ember',
		'text!tpl/index.hdb',
		'text!tpl/item.hdb',
		'text!tpl/card.hdb'
	], function ($, Ember, indexTpl, itemTpl, cardTpl) {
		var Handlebars = Ember.Handlebars,
			TEMPLATES = Ember.TEMPLATES;

		$.extend(TEMPLATES, {
			index: Handlebars.compile(indexTpl),
			item: Handlebars.compile(itemTpl),
			'item/name': Handlebars.compile(cardTpl)
		});

		return TEMPLATES;
	});

})(window);
