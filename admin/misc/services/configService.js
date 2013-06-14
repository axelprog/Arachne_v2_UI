'use strict';

/* Services */

angular.module('configService', ['ngResource']).
    factory('AppConfig', function ($resource) {
        return{
            baseApiUrl: "http://192.168.2.225:8000\:8000",
            baseApiUrlRaw: "http://192.168.2.225:8000"
        }
    });

