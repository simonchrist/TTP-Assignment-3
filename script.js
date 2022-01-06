//Simon Christian TTP Assignment-3
//Write the code necessary to do the following:
//1) Select the section with an id of container without using querySelector.
console.log(document.getElementById("container"));

//2) Select the section with an id of container using querySelector.
console.log(document.querySelector("#container"));

//3) Select all of the list items with a class of "second".
console.log(document.getElementsByClassName("second"));

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
console.log(document.querySelector("ol .third"));

//5) Give the section with an id of container the text "Hello!".
document.getElementById("container").innerText = "Hello";

//6) Add the class main to the div with a class of footer.
let addClass = document.querySelector(".footer");
addClass.classList.add("main");
console.log(addClass);

//7) Remove the class main on the div with a class of footer.
addClass.classList.remove("main");
console.log(addClass);

//8) Create a new li element.
let addElement = document.createElement("li");
console.log(addElement);

//9) Give the li the text "four".
console.log(addElement.innerText = "four");

//10) Append the li to the ul element.
let appendElement = document.querySelector("ul");
console.log(appendElement.appendChild(addElement));

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let loop = document.querySelectorAll("ol li");
for(let i =0;i<loop.length;i++){
   loop[i].style.backgroundColor = "green";
}

//13) Remove the div with a class of footer.
let removeDiv = document.querySelector(".footer");
console.log(removeDiv.remove());