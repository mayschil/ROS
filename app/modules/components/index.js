// import CategoriesModule from './categories/categories.module'
import ItemsListModule from './itemsList/itemsList.module'
import DetailsModule from './details/details.module'
import OrderModule from './order/order.module'

export default angular.module('components', [
	ItemsListModule, DetailsModule,OrderModule
]).name


