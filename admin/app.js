'use strict';

var app = angular.module('Arachne', ['configService', 'Pagination', 'sourceServices',
        'taskServices', 'paginationFilters', 'listFilters', 'helperService']).
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.
            when('/source', {templateUrl: 'parts/sources/partials/source-list.html', controller: SourceListCtrl, reloadOnSearch: false}).
            when('/source/new', {templateUrl: 'parts/sources/partials/source-detail.html', controller: SourceCtrl}).
            when('/source/:sourceId', {templateUrl: 'parts/sources/partials/source-detail.html', controller: SourceCtrl}).
            when('/task', {templateUrl: 'parts/tasks/partials/task-list.html', controller: TaskListCtrl, reloadOnSearch: false}).
            when('/task/new', {templateUrl: 'parts/tasks/partials/task-detail.html', controller: TaskCtrl}).
            when('/task/:taskId', {templateUrl: 'parts/tasks/partials/task-detail.html', controller: TaskCtrl}).
            when('/scope', {templateUrl: 'parts/scope/partials/scope-detail.html', controller: SourceCtrl}).
            otherwise({redirectTo: '/source'});
    }]).
    config(function ($httpProvider) {
        /*HACK: for CORS query*/
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });


