(function(module) {
    'use strict';

    module.controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state'];
    function LoginCtrl($state){

        var vm = this;
        vm.valid = {};
        vm.submitLogin = function submitLogin(){
            if(vm.username === 'yoda' && vm.password === 'dogbah'){
                vm.errorMessage = undefined;
                vm.valid = {
                    username: 'ng-valid',
                    password: 'ng-valid'
                }
                $state.go('force.list');
            }
            else if(vm.username !== 'yoda'){
                vm.errorMessage = 'Username and Password do not match';
                vm.valid = {
                    username: 'ng-invalid',
                    password: 'ng-invalid'
                }
            }
            else{
                vm.errorMessage = 'Password you have entered does not match the username';
                vm.valid = {
                    username: 'ng-valid',
                    password: 'ng-invalid'
                }
            }
            console.log(vm.errorMessage);
        }

    }


}(angular.module('Controller')));
