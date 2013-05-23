'use strict';

var app = angular.module('Arachne', ['configService', 'Pagination', 'sourceServices',
        'taskServices', 'paginationFilters', 'listFilters', 'constService']).
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.
            when('/source', {templateUrl: 'partials/source-list.html', controller: SourceListCtrl, reloadOnSearch: false}).
            when('/source/new', {templateUrl: 'partials/source-detail.html', controller: SourceCtrl}).
            when('/source/:sourceId', {templateUrl: 'partials/source-detail.html', controller: SourceCtrl}).
            when('/task', {templateUrl: 'partials/task-list.html', controller: TaskListCtrl, reloadOnSearch: false}).
            when('/task/new', {templateUrl: 'partials/task-detail.html', controller: TaskCtrl}).
            when('/task/:taskId', {templateUrl: 'partials/task-detail.html', controller: TaskCtrl}).
            when('/scope', {templateUrl: 'partials/source-detail.html', controller: SourceCtrl}).
            otherwise({redirectTo: '/source'});
    }]).
    config(function ($httpProvider) {
        /*HACK: for CORS query*/
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });


