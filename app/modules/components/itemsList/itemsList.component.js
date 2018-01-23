"use strict";

import itemsListController	from './itemsList.controller'
import ItemService from '../../services/items.service.js'
 

const ItemsListComponent = {
	controllerAs: 'itemsListCtrl',
	controller: itemsListController,
	template: require('./itemsList.html'),
	bindings: {
		currcategory: '<'
	}
};

export default ItemsListComponent;