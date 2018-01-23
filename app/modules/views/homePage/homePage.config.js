"use strict";


import HomePageController from './homePage.controller'
import HomePageComponent from './homePage.component'

export default function ($stateProvider, $urlRouterProvider) {
	
	
	$stateProvider
		.state('homePage', {
			url: '/',
			controllerAs: 'homePageCtrl',
			controller: HomePageController,
			template: require('./homePage.html'),
			component:HomePageComponent
		})
	$urlRouterProvider.otherwise('/');
}