const section = document.getElementById("container");
const sectionAgain = document.querySelector("#container");
const allSecondListItems = document.querySelectorAll(".second");
const thirdOrderedListItem = document.querySelector("ol .third");
const footer = document.querySelector(".footer");
const ul = document.querySelector("ul");
const orderedListItems = document.querySelectorAll("ol li");

// section.innerText = "Hello!";

footer.classList.add("main");
footer.classList.remove("main");

const li = document.createElement("li");
li.textContent = "four";
ul.append(li);

for (const listItem of orderedListItems) {
  listItem.style.backgroundColor = "green";
}

footer.remove();
