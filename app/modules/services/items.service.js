'use strict';

const FILE_NAME = '../../../catIems.json'

const catIems = {

    "categories": [
        {
            "id": "rXcXyc7b",
            "name": "Burgers",

            "items": [
                {
                    "id": "gdijnib8",
                    "in_stock": true,
                    "modifier_groups_count": 2,
                    "modifier_groups_id": ['eMiy4iR4', 'kMT85Tay'],
                    "name": "Tunami",
                    "open": false,
                    "price": 799,
                    "price_levels": [
                        {
                            "id": "L8ijGiGX",
                            "price": 799
                        }
                    ]
                },
                {
                    "id": "rMTAbTjr",
                    "in_stock": true,
                    "modifier_groups_count": 2,
                    "modifier_groups_id": ['eMiy4iR4', 'kMT85Tay'],
                    "name": "New Bacon-ings",
                    "open": false,
                    "price": 689,
                    "price_levels": [
                        {
                            "id": "7oTd8T9A",
                            "price": 689
                        }
                    ]
                },
                {
                    "id": "gkc8bca9",
                    "in_stock": false,
                    "modifier_groups_count": 2,
                    "modifier_groups_id": ['eMiy4iR4', 'kMT85Tay'],
                    "name": "Poblano Picasso Burger",
                    "open": false,
                    "price": 799,
                    "price_levels": [
                        {
                            "id": "K6czEc8b",
                            "price": 799
                        }
                    ]
                }
            ]
            ,

        },
        {

            "items": [
                {
                    "id": "gki84ia9",
                    "in_stock": true,
                    "modifier_groups_count": 0,
                    "modifier_groups_id": [],
                    "name": "Soda",
                    "open": false,
                    "price": 150,
                    "price_levels": [
                        {
                            "id": "Byineidy",
                            "price": 150
                        },
                        {
                            "id": "g4T4dTBj",
                            "price": 200
                        },
                        {
                            "id": "K6czkc8b",
                            "price": 250
                        }
                    ]
                },
                {
                    "id": "doTaLTyg",
                    "in_stock": true,
                    "modifier_groups_count": 0,
                    "name": "Orange Juice",
                    "open": false,
                    "price": 175,
                    "price_levels": [
                        {
                            "id": "L4iqKid8",
                            "price": 175
                        },
                        {
                            "id": "K6T8MTzb",
                            "price": 300
                        }
                    ]
                }
            ]
            ,
            "id": "AdiRjiAp",
            "name": "Drinks"
        },
        {

            "items": [
                {
                    "id": "GyiKLiLo",
                    "in_stock": true,
                    "modifier_groups_count": 0,
                    "modifier_groups_id": [],
                    "name": "Chips & Salsa",
                    "open": false,
                    "price": 250,
                    "price_levels": [
                        {
                            "id": "neiani8B",
                            "price": 250
                        }
                    ]
                },
                {
                    "id": "recb5cKX",
                    "in_stock": true,
                    "modifier_groups_count": 0,
                    "modifier_groups_id": [],
                    "name": "Mozzarella Sticks",
                    "open": false,
                    "price": 425,
                    "price_levels": [
                        {
                            "id": "Bycnrcdy",
                            "price": 425
                        }
                    ]
                }
            ]
            ,
            "id": "AkT69Tgy",
            "name": "Appetizers"
        }
    ]
};


const modifiers = {


    "modifiers": [
        {
            "id": "zRcEkcj8",
            "name": "Overcooked",
            "open": false,
            "price_levels": [
                {
                    "id": "REiAoiq7",
                    "price": 0
                }
            ],
            "price_per_unit": 0

        },
        {
            "id": "E5cpac84",
            "name": "Tomato",
            "open": false,
            "price_levels": [
                {
                    "id": "Rzi98iRR",
                    "price": 0
                }
            ],
            "price_per_unit": 0

        },
        {
            "id": "E5ip4i84",
            "name": "Bleeding",
            "open": false,
            "price_levels": [
                {
                    "id": "rgTxpTRk",
                    "price": 0
                }
            ],
            "price_per_unit": 0

        },
        {
            "id": "pAia8ioe",
            "name": "Almost burnt",
            "open": false,
            "price_levels": [
                {
                    "id": "AoTpRTdk",
                    "price": 0
                }
            ],
            "price_per_unit": 0

        },
        {
            "id": "GkiREiyL",
            "name": "Cheese",
            "open": false,
            "price_levels": [
                {
                    "id": "aoT55T4B",
                    "price": 100
                }
            ],
            "price_per_unit": 100

        },
        {
            "id": "8kT9KTX7",
            "name": "Perfect",
            "open": false,
            "price_levels": [
                {
                    "id": "nAceac8B",
                    "price": 0
                }
            ],
            "price_per_unit": 0

        },
        {
            "id": "4GT5XTze",
            "name": "Burnt",
            "open": false,
            "price_levels": [
                {
                    "id": "nGcLkcrx",
                    "price": 0
                }
            ],
            "price_per_unit": 0

        }
    ]

};

const modifierGruop = {



    "modifier_groups": [
        {
            "id": "eMiy4iR4",
            "maximum": 1,
            "minimum": 1,
            "name": "Temperature",
            "required": false,


            "options": [
                {
                    "id": "4GT5XTze",
                    "name": "Burnt",
                    "open": false,
                    "price_levels": [
                        {
                            "id": "nGcLkcrx",
                            "price": 0
                        }
                    ],
                    "price_per_unit": 0

                },
                {
                    "id": "E5ip4i84",
                    "name": "Bleeding",
                    "open": false,
                    "price_levels": [
                        {
                            "id": "rgTxpTRk",
                            "price": 0
                        }
                    ],
                    "price_per_unit": 0

                },
                {
                    "id": "8kT9KTX7",
                    "name": "Perfect",
                    "open": false,
                    "price_levels": [
                        {
                            "id": "nAceac8B",
                            "price": 0
                        }
                    ],
                    "price_per_unit": 0

                },
                {
                    "id": "zRcEkcj8",
                    "name": "Overcooked",
                    "open": false,
                    "price_levels": [
                        {
                            "id": "REiAoiq7",
                            "price": 0
                        }
                    ],
                    "price_per_unit": 0

                },
                {
                    "id": "pAia8ioe",
                    "name": "Almost burnt",
                    "open": false,
                    "price_levels": [
                        {
                            "id": "AoTpRTdk",
                            "price": 0
                        }
                    ],
                    "price_per_unit": 0

                }
            ]

        },
        {
            "id": "kMT85Tay",
            "maximum": null,
            "minimum": 1,
            "name": "Toppings",
            "required": false,


            "options": [
                {
                    "id": "E5cpac84",
                    "name": "Tomato",
                    "open": false,
                    "price_levels": [
                        {
                            "id": "Rzi98iRR",
                            "price": 0
                        }
                    ],
                    "price_per_unit": 0

                },
                {
                    "id": "GkiREiyL",
                    "name": "Cheese",
                    "open": false,
                    "price_levels": [
                        {
                            "id": "aoT55T4B",
                            "price": 100
                        }
                    ],
                    "price_per_unit": 100

                }
            ]

        }
    ]

};


class itemsService {

    getItems() {
        return catIems
    }


    getModifiers() {
        return modifierGruop
    }

    getItem(itemId) {
        var itemToReturn;
        catIems.categories.forEach(category => {
            category.items.forEach(item => {
                if (item.id === itemId) itemToReturn = item
            })
        })
        return itemToReturn
    }

    getModifierGroup(ids) {
        var items = [];
        ids.forEach(id => {
            modifierGruop.modifier_groups.forEach(item => {
                if (item.id === id) items.push(item)
            })
        })
        return items
    }

    saveItem(item) {
        for (var i = 0; i < catIems.categories.length; i++) {
            for (var j = 0; j < catIems.categories[i].items.length; j++) {
                if (catIems.categories[i].items[j].id === item.id) catIems.categories[i].items[j] = item;

            }
        }
    }

    saveMod(item) {
        for (var i = 0; i < modifiers.modifiers.length; i++) {
            if (modifiers.modifiers[i] === item[0].id) modifiers.modifiers[i] = item;
        }
    }

    deleteMod(item) {

        for (var i = 0; i < modifiers.modifiers.length; i++) {
            if (modifiers.modifiers[i].id === item.id)
                modifiers.modifiers.splice(i, 1)
        }

        for (var i = 0; i < modifierGruop.modifier_groups.length; i++) {
            for (var j = 0; j < modifierGruop.modifier_groups[i].options.length; j++) {
                if (modifierGruop.modifier_groups[i].options[j].id === item.id)
                    modifierGruop.modifier_groups[i].options.splice(j, 1)
            }
        }


    }


    deleteItem(item) {
        for (var i = 0; i < catIems.categories.length; i++) {
            for (var j = 0; j < catIems.categories[i].items.length; j++) {

                if (catIems.categories[i].items[j].id === item.id) {
                    catIems.categories[i].items.splice(j, 1)
                }
            }
        }
    }
}

export default itemsService




