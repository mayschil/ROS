"use strict";


function itemsListController(ItemsService, $window) {
    'ngInject'

    this.isActive = false;
    this.throwMsg = false;
    this.editItem = function (item) {
        this.modifierGroups = null;
        this.item = item;

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
        if (!this.orders.length) {
            var l = this.currcategory.length;
            this.tempCont = this.currcategory.splice(l - 1, 1)
            console.log(this.tempCont)
        }
        else console.log(this.orders)
        this.msg = true;
    }

    this.closeModal = function (comment) {
        this.order.comment = comment;
        this.orders.push(this.order)
        this.isActive = false;
        this.order = { mods: [] };
    }


    this.order = { mods: [] };
    this.orders = [];
    this.setOrd = function (term) {
        if (!this.order.name) this.order.name = this.item.name;
        if(!term.name)  this.order.mods.push({ modName: term.price });
        else this.order.mods.push({ modName: term.name });
    }
}

export default itemsListController;