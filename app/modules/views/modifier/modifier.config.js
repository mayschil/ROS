
"use strict";
import ModController from './modifier.controller'

export default function ($stateProvider, $urlRouterProvider) {
    

    $stateProvider
        .state('modifier', {
            url: '/modifier/',
            template: require('./modifier.html'),
            controller:ModController,
            controllerAs:'modCtrl'
            
        })
    $urlRouterProvider.otherwise('/');
}