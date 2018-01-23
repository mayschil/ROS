"use strict"

require('./details.scss');
import DetailsComponent from './details.component'

const appModule = angular.module('item', []);
appModule.component('item', DetailsComponent);

export default appModule.name;
