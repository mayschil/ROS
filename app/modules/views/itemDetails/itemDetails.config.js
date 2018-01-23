
"use strict";

export default function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('itemDetails', {
            url: '/item/:itemId',
            template: require('./itemDetails.html'),
            controller:function ($stateParams,$state){
                var itemId = $stateParams.itemId;
                this.state = $state.current
                this.params = $stateParams; 
            }
        })
    $urlRouterProvider.otherwise('/');
}