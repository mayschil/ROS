"use strict";

require('./orderDetails.scss');
import config from './orderDetails.config'
// import OrderDetailsController from './orderDetails.controller'
import OrderModule from '../../components/index.js'

const appModule = angular.module('orderDetails', [OrderModule]);

appModule.config(config);

// appModule.controller('OrderDetailsController', OrderDetailsController);
export default appModule.name;