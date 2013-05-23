'use strict';

/* Services */

angular.module('configService', ['ngResource']).
    factory('AppConfig', function($resource ){
        return{
            baseApiUrl:  "http://192.168.2.224:8000\:8000"
        }
    });

