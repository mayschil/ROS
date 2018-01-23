
"use strict";

export default function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('orderDetails', {
            url: '/order/:itemId',
            template: require('./orderDetails.html'),
            controller:function ($stateParams,$state){
                var itemId = $stateParams.itemId;
                this.state = $state.current
                this.params = $stateParams; 
            }
        })
    $urlRouterProvider.otherwise('/');
}