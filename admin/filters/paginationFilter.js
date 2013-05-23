'use strict';

angular.module('paginationFilters', [])
    .filter('showPage', function() {
        return function(list, pagination) {
           return list.slice(pagination.itemsPerPage * (pagination.currentPage - 1), pagination.itemsPerPage * pagination.currentPage);
        };
    });
