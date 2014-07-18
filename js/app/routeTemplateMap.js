(function (W) {
	'use strict';

	define([
		'jQuery',
		'ember',
		'text!tpl/index.hdb',
		'text!tpl/item.hdb'
	], function ($, Ember, indexTpl, itemTpl) {
		var Handlebars = Ember.Handlebars,
				TEMPLATES = Ember.TEMPLATES;

		$.extend(TEMPLATES, {
			index: Handlebars.compile(indexTpl),
			'list/item': Handlebars.compile(itemTpl)
		});

		return TEMPLATES;
	});

})(window);