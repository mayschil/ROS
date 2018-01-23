"use strict";

require('./itemsList.scss');
import ItemsListComponent from './itemsList.component'
import dnd from '../../../../dnd.js'

const appModule = angular.module('itemsList', ['dndLists']);

appModule.component('itemsList', ItemsListComponent);

export default appModule.name;