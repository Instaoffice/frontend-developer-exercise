(function() {
    'use strict';

    angular.module('Directive', [])
        .directive('mainBody', mainBody);

    mainBody.$inject = [];

    function mainBody(){
        return {
            restrict:'E',
            templateUrl:'templates/main-body.html'
        }
    }

}());
