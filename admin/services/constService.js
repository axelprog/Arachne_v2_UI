'use strict';

/* Services */

angular.module('constService', ['ngResource', 'configService']).
    factory('TaskStatus', function ($resource, AppConfig) {
        return $resource(AppConfig.baseApiUrl + '/api/stream/task_status', {}, {
            getList: {method: 'GET', isArray: true}
        });
    });