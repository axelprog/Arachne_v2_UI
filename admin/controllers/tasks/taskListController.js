'use strict';

/* Controllers */

function TaskListCtrl($scope, Task, Source, TaskStatus, $location) {
    //get source list
    $scope.sources = Source.getList();
    $scope.statuses = TaskStatus.getList();

    //get task list
    $scope.items = Task.getList(function () {
        $scope.pagination.total = Math.ceil($scope.items.length / $scope.pagination.itemsPerPage);
    });

    $scope.parseDate = function (date) {
        return new Date(date);
    };

    $scope.pagination = {
        currentPage: 1,
        total: 1,
        itemsPerPage: 10
    };

    $scope.$watch('location.search()', function () {
        $scope.searchName = ($location.search()).name;
    });

    $scope.changeUrlSearch = function () {
        $location.search('');//clear search
        if ($scope.searchName !== undefined)
            $location.search('name', $scope.searchName);
    };
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];

