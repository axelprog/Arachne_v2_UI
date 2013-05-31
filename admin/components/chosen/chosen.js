var module = angular.module('Chosen', []);

module.directive('chosen', function () {
    return {
        require: 'select',
        restrict: 'A',

        link: function (scope, element, attrs) {
            var model = attrs['ngModel'];

            var options = attrs.chOptions;
            if (!options) return;


            scope.$watch(options, function () {
                element.trigger('liszt:updated');
            });

            /* Added this in so that you could preselect items */
            scope.$watch(model, function () {
                element.trigger("liszt:updated");
            });

            element.chosen();
        }
    }
});