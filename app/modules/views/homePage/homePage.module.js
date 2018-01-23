"use strict";

require('./homePage.scss');
import config from './homePage.config'
import ItemsListModule from '../../components/index.js'
const appModule = angular.module('homePage', [ItemsListModule]);
appModule.config(config);
export default appModule.name;