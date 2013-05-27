function SourceCtrl($scope, $routeParams, Source, $location) {
    var srcId = $routeParams.sourceId;
    var isNew = false;

    if (srcId) {
        $scope.item = Source.getItem({sourceId: srcId});
        isNew = false;
    }
    else {
        $scope.item = {};
        isNew = true
    }

    $scope.save = function () {
        if (isNew) {
            Source.create($scope.item, function () {
                $location.path('/source');
            });
        }
        else {
            $scope.item.$save({sourceId: $scope.item.id}, function () {
                $location.path('/source');
            });
        }

    };
}