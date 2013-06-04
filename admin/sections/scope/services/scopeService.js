'use strict';

/* Services */

angular.module('scopeServices', ['ngResource', 'configService']).
    factory('Scope', function ($resource, AppConfig) {
        return $resource(AppConfig.baseApiUrl + '/api/stream/project/:scopeId', {}, {
            getList: {method: 'GET', isArray: true},
            getItem: {method: 'GET', params: {scopeId: ''}},
            create: {method: 'POST'},
            save: {method: 'PUT'},
            delete: {method: 'DELETE', params: {scopeId: ''}}
        });
    });
