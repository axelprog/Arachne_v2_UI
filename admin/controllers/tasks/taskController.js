function TaskCtrl($scope, $routeParams, Task, Source, $location) {
    var taskId = $routeParams.taskId;
    var isNew = false;

    //get source list
    $scope.sources = Source.getList();

    //get task info
    if (taskId) {
        $scope.item = Task.getItem({taskId: taskId});
        isNew = false;
    }
    else {
        $scope.item = {};
        isNew = true
    }

    $scope.save = function () {
        if (isNew) {
            Task.create($scope.item, function () {
                $location.path('/task');
            });
        }
        else {
            $scope.item.$save({taskId: $scope.item.id}, function () {
                $location.path('/task');
            });
        }

    };
}