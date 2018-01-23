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
            var l = this.currcategory.length;
            this.tempCont = this.currcategory.splice(l - 1, 1)
        }
        this.count++;
    }


    //this function prints the items to order
    this.print = function () {
        var itemsToPrint = [];
        var l = this.currcategory.length;
        this.tempCont = this.currcategory.splice(l - 1, 1)
        var arr = this.tempCont[0].columns

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].order) itemsToPrint.push({ name: arr[i].name, order: arr[i].order })
            else {
                if (arr[i].name !== 'Drag your items to print') itemsToPrint.push(arr[i].name)
            }
        }
        console.log(itemsToPrint)
        this.msg = true;
    }

    this.closeModal = function (comment) {
        this.item.order.push({ 'comment': comment })
        this.isActive = false;

    }


    this.setOrd = function (term) {
        console.log(term)
        if (term.price) this.item.order.push(term.price)
        else this.item.order.push(term.name)

    }
}

export default itemsListController;