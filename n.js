var list = document.createElement("ul");
var wrapper = document.getElementById("wrapper");
wrapper.appendChild(list);
var listElement = document.createElement("li");
list.appendChild(listElement);
listElement.innerHTML = "Paryż";

var addBtn = document.createElement("button");
addBtn.innerHTML = "dodaj nowy element";
wrapper.appendChild(addBtn);

addBtn.addEventListener("click", function () {
	var myNewListElement = document.createElement("li");
	list.appendChild(myNewListElement);
	myNewListElement.innerHTML = "Barcelona";
}, false);
