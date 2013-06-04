'use strict';


/* Controllers */

function TaskListCtrl($scope, Task, SourceNames, TaskStatus, HelperFunc, $location) {
    $scope.searchDateFrom = {};
    $scope.searchDateTo = {};

    //get source list
    $scope.sources = SourceNames.getList();
    $scope.statuses = TaskStatus.getList();


    //get task list
    function getItems() {
        $scope.items = Task.getList(function () {

            $scope.pagination.total = Math.ceil($scope.items.length / $scope.pagination.itemsPerPage);
            angular.forEach($scope.items, function (task) {
                if (task.end_stamp)
                    task.parsedDate = new Date(task.end_stamp);
            })
        });
    };

    getItems();


    $scope.pagination = {
        currentPage: 1,
        total: 1,
        itemsPerPage: 10
    };

    $scope.$watch('location.search()', function () {

        var name = ($location.search()).name;
        if (name)
            $scope.searchName = name;

        var dateFrom = ($location.search()).dateFrom;
        if (dateFrom) {
            var date = new Date(dateFrom + "T00:00:00.000Z"); // set time zone
            $scope.searchDateFrom.date = date;
        }

        var dateTo = ($location.search()).dateTo;
        if (dateTo) {
            var date = new Date(dateTo + "T00:00:00.000Z"); //set timezone
            $scope.searchDateTo.date = date;
        }
    });

    $scope.changeUrlSearch = function () {
        $location.search('');//clear search
        if ($scope.searchName !== undefined)
            $location.search('name', $scope.searchName);

        if ($scope.searchDateFrom.date !== undefined)
            $location.search('dateFrom', HelperFunc.DateToStr($scope.searchDateFrom.date));

        if ($scope.searchDateTo.date !== undefined)
            $location.search('dateTo', HelperFunc.DateToStr($scope.searchDateTo.date));
    };

    $scope.delete = function (id) {

        Task.delete({taskId: id}, function () {
            getItems();
        });

    };
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];

