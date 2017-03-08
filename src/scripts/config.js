(function() {
    'use strict';
    angular.module('Config', [])
        .config(['$stateProvider', '$locationProvider', '$httpProvider', '$urlRouterProvider', '$qProvider', function($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider, $qProvider) {

            $qProvider.errorOnUnhandledRejections(false)

                $stateProvider
                    .state('force', {
                        url: '/force',
                        template: '<ui-view/>',
                        abstract: true
                    })
                    .state('force.login', {
                        url: '/login',
                        templateUrl: 'app/login/login.html',
                        controller:'LoginCtrl',
                        controllerAs:'loginVm'
                    })
                    .state('force.list', {
                        url: '/list',
                        templateUrl: 'app/force-list/force-list.html',
                        controller:'ForceListCtrl',
                        controllerAs:'listVm'
                    })
                    .state('force.details', {
                        url: '/details/:id',
                        templateUrl: 'app/force-details/force-details.html',
                        controller:'ForceDetailsCtrl',
                        controllerAs:'detailsVm'
                    })

                $urlRouterProvider.otherwise('/force/login');
            }
    ]);

}());
