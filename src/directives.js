angular.module('bg.directives', [])
    .directive("hiWorld1", function ($compile) {
        return function (scope, tElement, attrs) {
            console.warn('hiWorld1 link');
        };
    })
    .directive("hiWorld2", function () {
        return {
            restrict: "A",
            compile: function compile(tElement, tAttrs, transclude) {
                console.warn("hiWorld2 compile");
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                        console.warn("preLink hiWorld2");
                    },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                        console.warn("postLink hiWorld2");
                    }
                };
            }
        };
    });