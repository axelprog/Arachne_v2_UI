'use strict';

function navCtrl($scope, $location, Auth) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        //return page === currentRoute ? 'active' : '';
        return currentRoute.indexOf(page) == 0 ? 'active' : '';
    };

    $scope.logout = function () {
        Auth.logout(function () {
            $location.path('/login');
        }, function () {
            $rootScope.error = "Failed to logout";
        });
    };
};
