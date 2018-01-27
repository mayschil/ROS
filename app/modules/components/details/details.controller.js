"use strict";


function DetailsController(ItemsService, $stateParams,$state) {

    'ngInject'
    const itemId = $stateParams.itemId;
    this.categories = ItemsService.getItems().categories;

    
    this.categories.forEach(item => {
        item.items.forEach(product => {
            if (product.id === itemId) {
                this.currItem = product;
                this.copy = Object.assign({}, this.currItem);
            };
        })
    })

    this.save = function(){
        ItemsService.saveItem(this.copy);
        $state.go("homePage")
    
    }
    this.cancel = function(){
        window.location.href = $state.href('homePage');
        window.location.reload();
    
    }

    this.deleteItem = function(itemId){
        ItemsService.deleteItem(this.copy);
        $state.go("homePage")
    }
}

export default DetailsController