"use strict";
import ItemService from '../../services/items.service.js'
import DetailsController from './details.controller'


const DetailsComponent = {
	controllerAs: 'detailsCtrl',
	controller:DetailsController,
	template: require('./details.html'),
};

export default DetailsComponent;