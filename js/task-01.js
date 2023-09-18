const listOfItems = document.querySelectorAll("li.item");
console.log("number of categories: "+listOfItems.length);
listOfItems.forEach(item => {
    const itemName = item.querySelector("h2").textContent;
    const itemNumbers = item.querySelectorAll("ul>li").length;

    console.log("Category: "+itemName);
    console.log("Elements: "+itemNumbers);
});