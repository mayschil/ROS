'use strict'

window.angular = require('angular');
require('./styles/globals.scss');

angular.module('appEntry', [
	require('angular-ui-router'),
	require('angular-animate'),
	require('./modules'),
])