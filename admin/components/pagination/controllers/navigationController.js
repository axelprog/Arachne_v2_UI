'use strict';

app.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        //return page === currentRoute ? 'active' : '';
        return currentRoute.indexOf(page) == 0 ? 'active' : '';
    };
}]);
