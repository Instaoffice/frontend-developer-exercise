(function(module) {
    'use strict';
    module.service('fetchService', fetchService);

    fetchService.$inject = ['$http'];

    function fetchService($http){
        this.getDetails = function getDetails(){
            return $http.get('scripts/jedi.json');
        }
    }


}(angular.module('Service')));
