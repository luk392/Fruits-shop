//basic variables
var basketUl = document.querySelector('#basket-inside ul');
//var basketArray = document.querySelectorAll('#basket-inside ul li');
var basketArray = Array.prototype.slice.call(document.querySelectorAll("#basket-inside ul li"));
//Change "basketArray" into Array
//basketArray = Array.prototype.slice.call(basketArray);
var deleteButton = document.querySelector('#delete-button');
var addButton = document.querySelector('#add-button');
var removeButton = document.querySelector('#remove-button');
//Array with list of item to buy
var fruits = ['apple', 'peach', 'orange', 'pear']
fruits[0] = document.querySelector("#assortment").querySelector('#apple');
fruits[1] = document.querySelector("#assortment").querySelector('#peach');
fruits[2] = document.querySelector("#assortment").querySelector('#orange');
fruits[3] = document.querySelector("#assortment").querySelector('#pear');
fruits[4] = document.querySelector("#assortment").querySelector('#watermelon');
fruits[5] = document.querySelector("#assortment").querySelector('#grapefruit');
fruits[6] = document.querySelector("#assortment").querySelector('#kiwi');
fruits[7] = document.querySelector("#assortment").querySelector('#pineapple');
fruits[8] = document.querySelector("#assortment").querySelector('#banana');

//New Array for handled basket
var orderedBasket = []
//Fruits Objects, and at the bottom is Array of this object
var apple = {
    name: "apple",
    price: 1, 
    weight: 0.5
};
var peach = 
{
    name: "peach",
    price: 2, 
    weight: 0.5,
};
var orange = 
{
    name: "orange",
    price: 1, 
    weight: 0.5,
};
var pear = 
{
    name: "pear",
    price: 1.5, 
    weight: 0.5,
};
var watermelon = 
{
    name: "watermelon",
    price: 3, 
    weight: 1.5,
};
var grapefruit = 
{
    name: "grapefruit",
    price: 2, 
    weight: 0.5,
};
var kiwi = 
{
    name: "kiwi",
    price: 1, 
    weight: 0.25,
};
var pineapple = 
{
    name: "pineapple",
    price: 2, 
    weight: 1,
};
var banana = 
{
    name: "banana",
    price: 1, 
    weight: 0.5,
};
var fruitsObject = [apple, peach, orange, pear, watermelon, grapefruit, kiwi, pineapple, banana];

//FUNCTIONS AND METHODS
//#inside-basket handling functions
fruits.forEach(function (item){
            
        //When user click on "item" in assortment
        item.addEventListener("click", function(){
            
            //Only when item in assortment is NOT selected
            if(item.className != "col-lg-4 col-md-4 col-sm-10 list-group-item selected")
            {
                //Add class "selected" to item
                item.classList.add("selected");
                
                //Get number of index in array 
                let fruitsIndex = fruits.indexOf(item);
                
                //create item as element of list
                let newLi = document.createElement("li");
                let span_1 = document.createElement("span");
                span_1.innerText = " / ";
                newLi.innerHTML = fruitsObject[fruitsIndex].name;
                newLi.innerHTML += '<span> / </span>';
                newLi.innerHTML += fruitsObject[fruitsIndex].price;
                
                
                let span_2 = document.createElement("span");
                span_2.innerText = "0";
                span_2.className += "badge badge-default badge-pill";
                basketUl.appendChild(newLi).classList.add("list-group-item");
                //ad id to new item in basket
                basketUl.appendChild(newLi).id = "basket-" + fruitsObject[fruitsIndex].name;
                newLi.appendChild(span_2);
                
                //add item in array orderedBasket on the same position like in fruits[]
                orderedBasket[fruitsIndex] = document.querySelector("#basket-" + fruitsObject[fruitsIndex].name);
                
                //add new item to array
                basketArray.push(basketUl.lastChild);
            }
        },false);
});

//class support selected
basketUl.addEventListener("click", function(){
    
    let basketClass = basketUl.querySelector("li:hover").className;
    
        switch(basketClass)
                {
                    case "list-group-item":
                    basketUl.querySelector("li:hover").classList.toggle("selected");
                    break;
                
                    case "list-group-item selected":
                    basketUl.querySelector("li:hover").classList.toggle("selected");
                    break;
                }
                
}, false);

//add one item
addButton.addEventListener("click", function(){
        
        for(i=0; i<=basketArray.length; i++)
        {
            if(basketArray[i].className === "list-group-item selected")
                {
                    basketArray[i].querySelector(".badge-pill").textContent ++;
                }
        }
}, false);

//remove one item
removeButton.addEventListener("click", function remove(){
        let less = basketUl.querySelector("li.selected .badge-pill");
        if(less.textContent > 0)
            {
                less.textContent --;
            }
}, false);

//delete selected
deleteButton.onclick = function(){
    
            for(i=0; i<10; i++)
            {
                if(fruits[i].classList.contains("selected") && orderedBasket[i].classList.contains("selected"))
                    {
                        fruits[i].classList.toggle("selected");
                        basketUl.removeChild(orderedBasket[i]);
                    }
            }
        
};