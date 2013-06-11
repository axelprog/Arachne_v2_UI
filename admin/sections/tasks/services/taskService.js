'use strict';

/* Services */

angular.module('taskServices', ['ngResource', 'configService']).
    factory('Task',function ($resource, AppConfig) {
        return $resource(AppConfig.baseApiUrl + '/api/stream/task/:taskId', {}, {
            getList: {method: 'GET', isArray: true},
            getItem: {method: 'GET', params: {taskId: ''}},
            create: {method: 'POST'},
            save: {method: 'PUT'},
            delete: {method: 'DELETE', params: {taskId: ''}}
        });
    }).
    factory('TaskTagSave',function ($resource, AppConfig) {
        return $resource(AppConfig.baseApiUrl + '/api/stream/task/:taskId/tag', {}, {
            save: {method: 'POST', params: {taskId: ''}}
        });
    }).
    factory('TaskTagList', function ($resource, AppConfig) {
        return $resource(AppConfig.baseApiUrl + '/api/stream/tag/name', {}, {
            getList: {method: 'GET', isArray: true}
        });
    });
