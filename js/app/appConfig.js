(function (W) {
	'use strict';

	define([
		'app/router',

		'routes/cardRoute',
		'routes/listRoute',
		'routes/itemRoute',

		'views/cardView',
		'views/listView',

		'app/routeTemplateMap'
	], function (Router, CardRoute, ListRoute, ItemRoute, CardView, ListView) {
		return {
			rootElement: '#ember-root',

			Router: Router,

			/*Begin: Routes*/
			CardRoute: CardRoute,
			ListRoute: ListRoute,
			ListItemRoute: ItemRoute,
			/*End: Routes*/

			/*Begin: Views*/
			CardView: CardView,
			ListView: ListView
			/*End: Views*/
		};
	});

})(window);