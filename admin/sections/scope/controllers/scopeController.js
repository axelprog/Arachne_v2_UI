function ScopeCtrl($scope, $routeParams, Scope, TaskNames, $location, $q, $timeout, $resource) {
    var scopeId = $routeParams.scopeId;
    var isNew = false;


    //get source list
    $scope.tasks = (TaskNames.getList());
//    $scope.tasks  = [
//     {id: 1, name:'111'},
//     {id: 2, name:'222'},
//     {id: 3, name:'333'},
//     {id: 4, name:'444'}
//     ];

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