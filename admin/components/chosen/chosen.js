var module = angular.module('Chosen', []);

module.directive('chosen', function () {
    var linker = function (scope, element, attr) {
        if (attr.ngOptions) {

            //Get the name of the source list by getting the last String
            nhOptionVals = attr.ngOptions.split(" ");
            var sourceList = nhOptionVals[nhOptionVals.length - 1];

            //We watch the source (each time this value change, then we trigger the event 'liszt:updated'
            scope.$watch(sourceList, function () {
                //See Updating Chosen Dynamically
                element.trigger('liszt:updated'); //Trigger event defined by Chosen Plugin (see Chosen documenation)
            }, true)

            var model = attr['ngModel'];

            /* Added this in so that you could preselect items */
            scope.$watch(model, function () {
                element.trigger("liszt:updated");
            });

            //Apply the plugin
            element.chosen();
        }
    };

    return {
        restrict: 'A',
        link: linker
    }
});