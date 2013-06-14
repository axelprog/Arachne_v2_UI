'use strict';

var app = angular.module('Arachne', ['configService', 'Pagination', 'Chosen', 'sourceServices',
        'taskServices', 'scopeServices', 'paginationFilters', 'listFilters', 'helperService',
        '$strap.directives', 'ui.select2', 'authorizeApi'])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        var access = routingConfig.accessLevels;
        $routeProvider
            .when('/source', {
                templateUrl: 'sections/sources/partials/source-list.html',
                controller: SourceListCtrl,
                reloadOnSearch: false,
                access: access.user})

            .when('/source/new', {
                templateUrl: 'sections/sources/partials/source-detail.html',
                controller: SourceCtrl,
                access: access.user})

            .when('/source/:sourceId', {
                templateUrl: 'sections/sources/partials/source-detail.html',
                controller: SourceCtrl,
                access: access.user})

            .when('/task', {
                templateUrl: 'sections/tasks/partials/task-list.html',
                controller: TaskListCtrl,
                reloadOnSearch: false,
                access: access.user})

            .when('/task/new', {
                templateUrl: 'sections/tasks/partials/task-detail.html',
                controller: TaskCtrl,
                access: access.user})

            .when('/task/:taskId', {
                templateUrl: 'sections/tasks/partials/task-detail.html',
                controller: TaskCtrl,
                access: access.user})

            .when('/scope', {
                templateUrl: 'sections/scope/partials/scope-list.html',
                controller: ScopeListCtrl,
                reloadOnSearch: false,
                access: access.user})

            .when('/scope/new', {
                templateUrl: 'sections/scope/partials/scope-detail.html',
                controller: ScopeCtrl,
                access: access.user})

            .when('/scope/:scopeId', {
                templateUrl: 'sections/scope/partials/scope-detail.html',
                controller: ScopeCtrl,
                access: access.user})

            .when('/login', {
                templateUrl: 'auth/login.htm',
                controller: LoginCtrl,
                access: access.user})

            .otherwise({redirectTo: '/scope'});

        var interceptor = ['$location', '$q', function ($location, $q) {
            function success(response) {
                return response;
            }

            function error(response) {
                if (response.status === 401)
                    if (response.status === 401) {
                        $location.path('/login');
                        return $q.reject(response);
                    }
                    else {
                        return $q.reject(response);
                    }
            }

            return function (promise) {
                return promise.then(success, error);
            }
        }];

        $httpProvider.responseInterceptors.push(interceptor);
    }])
    .config(function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;


    })
    .run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.error = null;
            if (!Auth.authorize(next.access)) {
                if (Auth.isLoggedIn()) $location.path('/');
                else                  $location.path('/login');
            }
        });

        $rootScope.appInitialized = true;
    }]);
;

angular.module('$strap.config', []).value('$strapConfig', {
    datepicker: {
        language: 'ru',
        format: 'dd.mm.yyyy'
    }
});


