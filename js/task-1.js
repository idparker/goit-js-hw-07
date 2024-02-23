const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);

  const totalElements = element.querySelectorAll("li");
  console.log(`Elements: ${totalElements.length}`);
});
