const elementUl = document.getElementById("categories");
const elementLi = elementUl.querySelectorAll("li.item");
console.log(`Number of categories: ${elementLi.length}`);

elementLi.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);

  const totalElements = element.querySelectorAll("li");
  console.log(`Elements: ${totalElements.length}`);
});
