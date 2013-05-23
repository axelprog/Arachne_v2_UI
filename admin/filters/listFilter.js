'use strict';

angular.module('listFilters', [])
    .filter('getById', function () {
        return function (input, id) {
            var length = input.length;
            for (var i = 0; i < length; i++) {
                if (input[i].id === id) {
                    return input[i];
                }
            }
            return null;
        }
    })
    .filter('getByType', function () {
        return function (input, idType) {
            var length = input.length;
            for (var i = 0; i < length; i++) {
                if (input[i].type === idType) {
                    return input[i];
                }
            }
            return null;
        }
    });
