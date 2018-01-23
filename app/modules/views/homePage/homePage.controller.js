"use strict";

function HomePageController(ItemsService) {

    'ngInject'

    this.itemsToCart =
        {
            "name": "Drag your items to print",
            "id": 1,
            "columns": [

                {
                    "name": "Drag your items to print",
                    "id": 2
                }
            ]
        };
        
    this.isActive = false;
    this.categories = ItemsService.getItems().categories;
    const categoriesMap = this.categories.reduce((acc, category) => {
        acc[category.id] = category.items
        return acc
    }, {})

    this.chosenCategory = [0];
    this.showItems = (category) => {
        this.isActive = true;
        if(this.chosenCategory[0]!== 0) {
            this.chosenCategory.pop();
        }
        this.chosenCategory = categoriesMap[category.id].map(item => {
            return item
        })
        this.chosenCategory.push(this.itemsToCart);
    };

this.checkWord = function(text){
    this.isActive = true;
    var categoryItems = [];
    var lng = this.chosenCategory.length;
    var temp = this.chosenCategory[lng-1];
 
    //stop searching
    if(text === '' ){
            if(temp.columns.length === 1) {
                this.chosenCategory = [];
            }
            else {
                this.chosenCategory = [];
                this.chosenCategory.push(temp)
            }    
    }
    //while searching
    if(text !== '') {
        this.chosenCategory=[];
         categoryItems = this.categories.map(category => {
            return category.items
        })
        for (var i = 0; i < categoryItems.length; i++) {
            for (var j = 0; j < categoryItems[i].length; j++) {
                if(categoryItems[i][j].name.toLocaleLowerCase().includes(text)){
                    this.chosenCategory.push(categoryItems[i][j])
                } 
              }
        }
        this.chosenCategory.push(this.itemsToCart);
    }
    }
   
       

}

export default HomePageController


