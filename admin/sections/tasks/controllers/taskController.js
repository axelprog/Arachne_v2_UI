function TaskCtrl($scope, $routeParams, Task, TaskTagList, SourceNames, $location) {
    var taskId = $routeParams.taskId;
    var isNew = false;

    function saveTags(tagsList) {
        var tags = [];
        angular.forEach(tagsList, function (tag) {
            tags.push(tag.text);
        });
        //TaskTagSave.save({taskId: id}, {tags: tags}, callback);
        return tags;
    }

    $scope.tagList = TaskTagList.getList();
    //select2 options
    $scope.select2options = {
        allowClear: true,
        tags: $scope.tagList,
//        tags: ["ccc", "ддд", "ффф", "иии", "ццц"],
        tokenSeparators: [","],
        formatResult: function (state) {
            return state.text
        },
        formatSelection: function (state) {
            return state.text
        },
        escapeMarkup: function (m) {
            return m;
        }
    }

    //get source list
    $scope.sources = SourceNames.getList();

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
        $scope.item.tags = saveTags($scope.item.tags)
        if (isNew) {
            Task.create($scope.item, function (data) {
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