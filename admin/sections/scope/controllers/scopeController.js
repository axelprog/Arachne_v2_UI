function ScopeCtrl($scope, $routeParams, Scope, TaskNames, $location) {
    var scopeId = $routeParams.scopeId;
    var isNew = false;


    //get source list
    $scope.tasks = (TaskNames.getList());


    //get task info
    if (scopeId) {
        $scope.item = Scope.getItem({scopeId: scopeId});
        isNew = false;
    }
    else {
        $scope.item = {};
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
            $scope.item.$save({taskId: $scope.item.id}, function () {
                $location.path('/scope');
            });
        }

    };
}