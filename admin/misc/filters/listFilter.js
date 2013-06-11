'use strict';

angular.module('listFilters', [])
    .filter('getById', function () {
        return function (input, idsList) {
            var length = input.length;
            var filtrated = [];

            for (var i = 0; i < length; i++) {
                if (idsList.indexOf(input[i].id) != -1) {
                    filtrated.push(input[i]);
                }
            }
            return filtrated;
        }
    })
    .filter('getByType', function () {
        return function (input, idType) {
            var length = input.length;
            for (var i = 0; i < length; i++) {
                if (input[i].type === idType) {
                    return input[i];
                    input[0].id
                }
            }
            return null;
        }
    })
    .filter('betweenDate', function () {
        return function (items, startDate, endDate) {
            if (!startDate && !endDate)
                return items;


            var returnItems = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].end_stamp) {
                    var date = items[i].parsedDate;
                    date.setHours(3, 0, 0, 0);
                    if ((!startDate || startDate <= date)
                        && (!endDate || date <= endDate))
                        returnItems.push(items[i]);
                }
            }

            return returnItems;
        }
    });
