(function(module) {
    'use strict';

    module.controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = [];
    function LoginCtrl(){
        console.log('login controller');
    }


}(angular.module('Controller')));
