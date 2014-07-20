/*
 * nameController.js
 * Copyright (C) 2014 sushil <sushil@rogue>
 *
 * Distributed under terms of the MIT license.
 */
(function (W) {
    'use strict';

    define([
        'ember'
    ], function (Ember) {
        var NameController;

        NameController = Ember.ObjectController.extend({
            label: function () {
                return this.get('model');
            }.property('model')
        });

        return NameController;
    });

})(window);
