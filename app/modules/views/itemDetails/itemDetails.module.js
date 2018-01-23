"use strict";

require('./itemDetails.scss');
import config from './itemDetails.config'
import ItemDetailsController from './itemDetails.controller'
import DetailsModule from '../../components/index.js'

const appModule = angular.module('itemDetails', [DetailsModule]);

appModule.config(config);

appModule.controller('ItemDetailsController', ItemDetailsController);
export default appModule.name;