(function (W) {
	'use strict';

	define([
		'app/router',

		'routes/cardRoute',
		'routes/listRoute',
		'routes/itemRoute',
		'routes/nameRoute',

		'views/cardView',
		'views/listView',

		'controllers/cardController',
		'controllers/nameController',

		'app/routeTemplateMap'
	], function (Router, CardRoute, ListRoute, ItemRoute, NameRoute, CardView, ListView, CardController, NameController) {
		return {
			rootElement: '#ember-root',

			Router: Router,

			/*Begin: Routes*/
			CardRoute: CardRoute,
			ListRoute: ListRoute,
			ItemRoute: ItemRoute,
			ItemNameRoute: NameRoute,
			/*End: Routes*/

			/*Begin: Views*/
			CardView: CardView,
			ListView: ListView,
			/*End: Views*/

			/*Begin: Controllers*/
			CardController: CardController,
			ItemNameController: NameController
			/*End: Controllers*/
		};
	});

})(window);
