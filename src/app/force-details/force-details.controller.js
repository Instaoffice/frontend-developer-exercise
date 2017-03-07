(function(module) {
    'use strict';

    module.controller('ForceDetailsCtrl', ForceDetailsCtrl);

    ForceDetailsCtrl.$inject = ['$state', 'fetchService'];
    function ForceDetailsCtrl($state, fetchService){

        var vm = this;

        fetchService.getDetails().then(function(response){
            for(var i = 0; i < response.data.length; i++){
                if(response.data[i].id == $state.params.id){
                    vm.starDetails = response.data[i];
                }
            }
        })
    }


}(angular.module('Controller')));
