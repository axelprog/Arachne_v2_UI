angular.module("Pagination", ['Validation'])
    .directive('uiPagination', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl:'partials/paginator.html',
            scope: {
                currentPage: '=',
                totalPages: '=',
                totalItems: '@',
                itemsPerPage: '@'
            },
            link: function (scope, element, attrs) {

                scope.shownItemsCalc = function(){
                    if(scope.lastPage())
                        scope.shownItems = scope.totalItems - scope.itemsPerPage * (scope.currentPage - 1);
                    else
                        scope.shownItems = Math.min(scope.totalItems, scope.itemsPerPage );
                };
                scope.$watch('totalItems', function() {
                    scope.shownItemsCalc();
                });

                scope.$watch('itemsPerPage', function(itemsPerPage) {
                    scope.shownItemsCalc();
                });

                scope.$watch('currentPage', function() {
                  /*  if(scope.currentPage < 1)
                        scope.currentPage = 1;

                    if(scope.currentPage > scope.totalPages)
                        scope.currentPage = scope.totalPages;*/
                    scope.shownItemsCalc();
                })

                scope.shownItems = 0;

                scope.isCurrent = function (index) {
                    return scope.currentPage == index;
                };

                scope.setCurrent = function (index) {
                    scope.currentPage = index;
                };

                scope.hasPrev = function () {
                    return scope.currentPage > 1;
                };
                scope.prev = function () {
                    if (scope.hasPrev()) scope.currentPage--;
                };

                scope.hasNext = function () {
                    return scope.currentPage < scope.totalPages;
                };
                scope.next = function () {
                    if (scope.hasNext()) scope.currentPage++;
                };

                scope.firstPage = function () {
//                    return scope.start == 1;
                    return !scope.hasPrev();
                };
                scope.goToFirstPage = function () {
                    if (!scope.firstPage()) scope.currentPage = 1;
                };
                scope.lastPage = function () {
//                    return scope.end == scope.totalPages;
                    return !scope.hasNext();
                };
                scope.goToLastPage = function () {
                    if (!scope.lastPage()) scope.currentPage = scope.totalPages;
                };

            }
        };
    });