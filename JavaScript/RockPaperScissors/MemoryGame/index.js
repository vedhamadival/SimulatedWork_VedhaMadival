const CardArray = [
    {
       name: 'fries',
       img: 'Images/fries.png' 
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png' 
     },
     {
        name: 'hotdog',
        img: 'Images/hotdog.png' 
     },
     {
        name: 'ice-cream',
        img: 'Images/ice-cream.png' 
     },
     {
        name: 'milkshake',
        img: 'Images/milkshake.png' 
     },
     {
        name: 'pizza',
        img: 'Images/pizza.png' 
     },
     {
      name: 'fries',
      img: 'Images/fries.png' 
   },
   {
       name: 'cheeseburger',
       img: 'Images/cheeseburger.png' 
    },
    {
       name: 'hotdog',
       img: 'Images/hotdog.png' 
    },
    {
       name: 'ice-cream',
       img: 'Images/ice-cream.png' 
    },
    {
       name: 'milkshake',
       img: 'Images/milkshake.png' 
    },
    {
       name: 'pizza',
       img: 'Images/pizza.png' 
    },
] 
console.log(CardArray)

CardArray.sort(()=> 0.5  - Math.random())

const gridDisplay = document .querySelector('#grid')

function createBoard(){
   for(let i=0 ; i<CardArray.length; i++){
      const card = document.createElement('img')
      card.setAttribute('src' , 'images/blank.png')
      card.setAttribute('data-id', 'i')
      gridDisplay.appendChild(card)
   }
}

createBoard();