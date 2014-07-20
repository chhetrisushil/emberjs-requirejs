(function (W) {
	'use strict';

	define([
		'ember'
	], function (Ember) {
        var nameList = [
                {
                    id: 1,
                    label: 'Sushil'
                },
                {
                    id: 2,
                    label: 'Someone'
                },
                {
                    id: 3,
                    label: 'One more'
                },
                {
                    id: 4,
                    label: 'What to do'
                },
                {
                    id: 5,
                    label: 'There we go again'
                },
                {
                    id: 6,
                    label: 'Uff one more'
                }
            ],
		    ItemRoute = Ember.Route.extend({
			model: function (params) {
				return nameList[params.itemId - 1];
			}
		});

		return ItemRoute;
	});

})(window);
