"use strict";

require('./modifier.scss');
import config from './modifier.config'
const appModule = angular.module('modifier', []);
appModule.config(config);
export default appModule.name;