/*
 * utils.js
 * Copyright (C) 2014 sushil <sushil@rogue>
 *
 * Distributed under terms of the MIT license.
 */
(function (W) {
    'use strict';

    define(function () {
        var toString = W.Object.prototype.toString;

        function isString(val) {
            return toString.call(val) === '[object String]';
        }

        return {
            isString: isString
        };
    });

})(window);
