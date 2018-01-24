"use strict";


function itemsListController(ItemsService, $window) {
    'ngInject'

    
    this.isActive = false;
    this.throwMsg = false;
    this.editItem = function (item) {
        this.modifierGroups = null;
        this.item = item;
        this.item.order = [];
        if (!this.item.in_stock) {
            this.throwMsg = true;
        }
        else {
            this.isActive = true;
            if (this.item.modifier_groups_count >= 1) {
                this.modifierGroups = ItemsService.getModifierGroup(this.item.modifier_groups_id);
            }
        }
    }
    this.msg = false;
    this.close = function () {
        this.throwMsg = false;
        if (this.msg) $window.location.reload();

    }
    this.tempCont = [];
    this.count = 0;
    this.showWord = function () {
        if (this.count === 0) {
            var l = this.category.length;
            this.tempCont = this.category.splice(l - 1, 1)
        }
        this.count++;
    }


    //this function prints the items to order
    this.print = function () {
        var itemsToPrint = [];
        var lng = this.category.length;
        this.tempCont = this.category.splice(lng - 1, 1)
        this.category = [];
        var arr = this.tempCont[0].columns

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].order) itemsToPrint.push({ name: arr[i].name, order: arr[i].order })
            else {
                if (arr[i].name !== 'Drag your items to print') itemsToPrint.push(arr[i].name)
            }
        }
        console.log('the printed items are:', itemsToPrint)
        this.msg = true;
    }

    this.closeModal = function (comment) {
        this.item.order.push({ 'comment': comment })
        this.isActive = false;

    }


    this.setOrd = function (term) {
        if (term.price) this.item.order.push({size:term.price})
        else this.item.order.push({name:term.name})

    }
    this.setTop = function (term,amount) {
        console.log(term,amount)
        this.item.order.push({name:term, amount:amount})
        console.log(this.item.order)
    }
}

export default itemsListController;