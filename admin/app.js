'use strict';

var app = angular.module('Arachne', ['configService', 'Pagination', 'sourceServices',
        'taskServices', 'paginationFilters', 'listFilters', 'helperService', '$strap.directives']).
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.
            when('/source', {templateUrl: 'sections/sources/partials/source-list.html', controller: SourceListCtrl, reloadOnSearch: false}).
            when('/source/new', {templateUrl: 'sections/sources/partials/source-detail.html', controller: SourceCtrl}).
            when('/source/:sourceId', {templateUrl: 'sections/sources/partials/source-detail.html', controller: SourceCtrl}).
            when('/task', {templateUrl: 'sections/tasks/partials/task-list.html', controller: TaskListCtrl, reloadOnSearch: false}).
            when('/task/new', {templateUrl: 'sections/tasks/partials/task-detail.html', controller: TaskCtrl}).
            when('/task/:taskId', {templateUrl: 'sections/tasks/partials/task-detail.html', controller: TaskCtrl}).
            when('/scope', {templateUrl: 'sections/scope/partials/scope-detail.html', controller: SourceCtrl}).
            otherwise({redirectTo: '/source'});
    }]).
    config(function ($httpProvider) {
        /*HACK: for CORS query*/
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

angular.module('$strap.config', []).value('$strapConfig', {
    datepicker: {
        language: 'ru',
        format: 'dd.mm.yyyy'
    }
});


