"use strict";

require('./itemDetails.scss');
import config from './itemDetails.config'
import DetailsModule from '../../components/index.js'
const appModule = angular.module('itemDetails', [DetailsModule]);
appModule.config(config);
export default appModule.name;