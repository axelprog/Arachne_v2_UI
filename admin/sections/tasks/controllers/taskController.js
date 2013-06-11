function TaskCtrl($scope, $routeParams, Task, TaskTagSave, TaskTagList, SourceNames, $location) {
    var taskId = $routeParams.taskId;
    var isNew = false;

    function saveTags(id, tagsList, callback) {
        var tags = [];
        angular.forEach(tagsList, function (tag) {
            tags.push(tag.text);
        });
        TaskTagSave.save({taskId: id}, {tags: tags}, callback);
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
        if (isNew) {
            Task.create($scope.item, function (data) {
                saveTags(data.task.id, $scope.item.tags, function () {
                    $location.path('/task');
                });
            });
        }
        else {

            saveTags($scope.item.id.$scope.item.tags)
            $scope.item.$save({taskId: $scope.item.id}, function () {
                $location.path('/task');
            });
        }

    };
}