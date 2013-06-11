'use strict';

/* Controllers */

function SourceListCtrl($scope, Source, $location) {

    function getItems() {
        $scope.items = Source.getList(function () {
            $scope.pagination.total = Math.ceil($scope.items.length / $scope.pagination.itemsPerPage);
        });
    };
    getItems();


    $scope.pagination = {
        currentPage: 1,
        total: 1,
        itemsPerPage: 10
    }

    $scope.$watch('location.search()', function () {
        var name = ($location.search()).name;
        var url = ($location.search()).url;

        if (name || url) {
            if (!$scope.search)
                $scope.search = {};

            $scope.search.name = name;
            $scope.search.url = url;
        }
    });

    $scope.changeUrlSearch = function () {
        $location.search('');//clear search
        if ($scope.search.name !== undefined)
            $location.search('name', $scope.search.name);
        if ($scope.search.url !== undefined)
            $location.search('url', $scope.search.url);
    };

    $scope.delete = function (id) {

        Source.delete({sourceId: id}, function () {
            getItems();
        });

    };
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];

