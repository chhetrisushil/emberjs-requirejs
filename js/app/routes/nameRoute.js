/*
 * nameRoute.js
 * Copyright (C) 2014 sushil <sushil@rogue>
 *
 * Distributed under terms of the MIT license.
 */
(function (W) {
    'use strict';

    define([
        'ember'
    ], function (Ember) {
        var NameRoute = Ember.Route.extend({
                model: function (params) {
                    return params.name;
                }
            });

        return NameRoute;
    });

})(window);
