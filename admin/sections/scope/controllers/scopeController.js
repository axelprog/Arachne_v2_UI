function ScopeCtrl($scope, $routeParams, Scope, TaskNames, $location, $q, $timeout, $resource) {
    var scopeId = $routeParams.scopeId;
    var isNew = false;

    //get source list

    $scope.taskTag = []
    $scope.tasks = TaskNames.getList(function () {
        angular.forEach($scope.tasks, function (task) {
            $scope.taskTag.push({id: task.id, text: task.name});
        })
    });

    //get task info
    if (scopeId) {
        $scope.item = Scope.getItem({scopeId: scopeId});
        isNew = false;
    }
    else {
        $scope.item = {tasks: []};
        isNew = true
    }
    ;

    $scope.save = function () {
        if (isNew) {
            Scope.create($scope.item, function () {
                $location.path('/scope');
            });
        }
        else {
            $scope.item.$save({scopeId: $scope.item.id}, function () {
                $location.path('/scope');
            });
        }

    };

    return $scope.directiveOptions = {
        no_results_text: "SO SORRY"
    };

}