'use strict';

/* Services */

angular.module('sourceServices', ['ngResource', 'configService']).
    factory('Source', function ($resource, AppConfig) {
        return $resource(AppConfig.baseApiUrl + '/api/stream/source/:sourceId', {}, {
            getList: {method: 'GET', isArray: true},
            getItem: {method: 'GET', params: {sourceId: ''}},
            create: {method: 'POST'},
            save: {method: 'PUT'},
            delete: {method: 'DELETE'}
        });
    });