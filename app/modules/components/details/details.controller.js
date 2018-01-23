"use strict";


function DetailsController(ItemsService, $stateParams) {

    'ngInject'
    const itemId = $stateParams.itemId;
    // var self = this;
    this.categories = ItemsService.getItems().categories;
    this.categories.forEach(item => {
        item.items.forEach(product => {
            if (product.id === itemId) this.currItem = product;
        })
        // self.currItem =  item.items.filter(product => product.id === itemId)
    })

    console.log(this.currItem)


}

export default DetailsController