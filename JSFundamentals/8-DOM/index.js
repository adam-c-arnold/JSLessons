let listTitle = document.getElementById(`ListTitle`);

let listItem = document.querySelectorAll(`ul li`);

console.log(listItem);

listTitle.style.textAlign = `center`;

let groceryItems = document.getElementsByClassName(`groceryItem`);

groceryItems[2].style.color = `red`;
groceryItems.item(1).style.color = `green`;

console.log( document.body.childNodes )

let listDiv = document.getElementById(`list`);
console.log(listDiv.firstElementChild)

listDiv.firstElementChild.style.fontSize = `25px`;

document.getElementById(`ListTitle`).addEventListener(`mouseover`, event => {
    event.target.style.backgroundColor = `lightblue`;
})
/*document.getElementById('ListTitle').addEventListener(`mouseout`, event => {
    event.target.style.backgroundColor = `lightblue`;
})*/
listTitle.addEventListener(`mouseleave`, event => {
    event.target.style.backgroundColor = `transparent`;
})

let newItem = ``;
let inputBox = document.getElementById(`listInput`);
let groceryList = document.getElementById(`groceryList`);
let submitButton = document.getElementById(`clickMe`);
let errorMessage = document.createElement(`p`);

const generateNewItem = (value) => {
    if (value.length > 0) {
        errorMessage.innerText = ``;
        let newListItem = document.createElement(`li`);
        newListItem.innerText = value;
        groceryList.appendChild(newListItem);
        inputBox.value = ``;
    } else {
        errorMessage.innerText = `Enter a value, FOOL!`;
        errorMessage.style.color = `red`;
        document.getElementById(`inputField`).appendChild(errorMessage);
    }

}

inputBox.addEventListener(`keyup`, event => {


    if (event.keyCode === 13) {
        generateNewItem(event.target.value);


    } else {
    newItem = event.target.value;
    console.log(newItem);
    }
});

submitButton.addEventListener(`click`, event => {
    //create a new list item. 
    //attach that list item tot he ul
    //clear the input box
    let newListItem = document.createElement(`li`);
    newListItem.innerText = newItem;
    groceryList.appendChild(newListItem);
    inputBox.value = ``;

})