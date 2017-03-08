(function(module) {
    'use strict';

    module.controller('ForceListCtrl', ForceListCtrl);

    ForceListCtrl.$inject = ['$state'];
    function ForceListCtrl($state){

        var vm = this;
        vm.starwars == 'bb-8';

    }


}(angular.module('Controller')));
