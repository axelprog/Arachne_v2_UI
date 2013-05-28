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
    })
    .factory('TaskNames', function ($resource, AppConfig) {
        return $resource(AppConfig.baseApiUrl + '/api/stream/task/name', {}, {
            getList: {method: 'GET', isArray: true}
        });
    })
    .factory('HelperFunc', function () {
        return{
            DateToStr: function (date) {
                var curr_date = date.getDate();
                var day = curr_date.toString();
                var curr_month = date.getMonth();
                curr_month++;
                var month = curr_month.toString();
                var curr_year = date.getFullYear();
                return  curr_year + "-" + (month.length === 1 ? "0" + month : month) + "-" + (day.length === 1 ? "0" + day : day);
            }
        }
    });