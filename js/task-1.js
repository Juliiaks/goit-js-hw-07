
const list = document.querySelectorAll("#categories");
list.forEach(elem => console.log(`Number of categories: ${elem.children.length}`));

const listEl = document.querySelectorAll("li.item");
listEl.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const elements = category.querySelectorAll("ul > li");

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements.length}`);

});

