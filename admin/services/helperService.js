'use strict';

/* Services */

angular.module('helperService', ['ngResource', 'configService']).
    factory('TaskStatus', function ($resource, AppConfig) {
        return $resource(AppConfig.baseApiUrl + '/api/stream/task_status', {}, {
            getList: {method: 'GET', isArray: true}
        });
    })
    .factory('SourceNames', function ($resource, AppConfig) {
        return $resource(AppConfig.baseApiUrl + '/api/stream/source/name', {}, {
            getList: {method: 'GET', isArray: true}
        });
    });