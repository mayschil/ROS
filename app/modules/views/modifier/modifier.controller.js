"use strict";

function ModController(ItemsService, $state) {

    'ngInject'

    this.modifiersNames = [];
    this.modifiers = ItemsService.getModifiers();
    this.modifiers.modifier_groups.forEach(modifier => {
        this.modifiersNames.push(modifier.name)
    })

    this.modifierOptions = [];
    this.showMods = function (mod) {
        this.open = true;
        this.modifierOptions = this.modifiers.modifier_groups.filter(modifier => {
            return modifier.name === mod
        })
        this.copy = [...this.modifierOptions[0].options]
    }

    this.open = false;
    this.close = function () {
        this.open = false;
    }

    this.save = function () {
        ItemsService.saveMod(this.copy);
        $state.go("homePage")

    }
    this.cancel = function () {
        window.location.href = $state.href('homePage');
        // window.location.reload();
    }

    this.deleteItem = function (item) {
        ItemsService.deleteMod(item);
        $state.go("homePage")
    }
}

export default ModController


