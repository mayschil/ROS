"use strict";


function DetailsController(ItemsService, $stateParams) {

    'ngInject'
    const itemId = $stateParams.itemId;
    this.categories = ItemsService.getItems().categories;

    
    this.categories.forEach(item => {
        item.items.forEach(product => {
            if (product.id === itemId) this.currItem = product;
        })
    })

}

export default DetailsController