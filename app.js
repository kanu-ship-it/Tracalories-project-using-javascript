// storage Controller




//item controller

const ItemCtrl = (() => {
    //item contructor( item to add to the Data structure )
    
        const Item = function(id, name, calories) {
            this.id =id;
            this.name = name;  
            this.calories = calories;
                  
        }

    // Data structure / state
    const data = {
        items: [
            {id: 0, name:'steak Dinner' , calories: 1200},
            {id: 1, name:'Cookies' , calories: 400},
            {id: 2, name:'Eggs' , calories: 300},
        ],
        currentItem: null,
        totalCalories: 0,


    },

    // PUBLIC METHOD
    return {
        getItems: function(){
          return data.items;  
        }
    }

    return {
        logData: function(){
            return data;
        }
    }
    
})();


// UI Controller(Use to populate the user interface)
const UICtrl = (function(){

    // PUBLIC METHOD
    return {

    }
    
})();





//App controller
const App = (function(ItemCtrl, UICtrl){

    // PUBLIC METHOD
    return {
        init: function () {
            console.log("initializer....");
    
            //fetch item from data structure
            const items = ItemCtrl.getItems();
            console.log(items);
            
            
        }
    }
    
})(ItemCtrl , UICtrl);
//Initiallize App

App.init();