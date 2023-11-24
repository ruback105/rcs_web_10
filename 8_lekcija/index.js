// const headingElement = document.getElementById("heading-1");
// headingElement.textContent = "Hello World!";
// headingElement.style.color = "red";

// const headingElement = document.getElementsByTagName("h1");
// headingElement[0].textContent = "Hello World!";
// headingElement[0].style.color = "red";

// const linkElement = document.getElementsByClassName("link");
// linkElement[0].style.color = "green";
// linkElement[0].style.textDecoration = "none";

// const firstLinkElement = document.querySelector(".test.link");
// console.log(firstLinkElement);

// const allLinkElements = document.querySelectorAll("a.link");
// console.log(allLinkElements);

// const headingElement = document.querySelector("h1");
// headingElement.innerHTML = "<span>Test content</span>";

// const buttonElement = document.querySelector("button");
// buttonElement.classList.add("highlighted");
// buttonElement.classList.remove("highlighted");
// buttonElement.classList.toggle("highlighted");

const wrapperElement = document.createElement("div");
const bodyElement = document.querySelector("body");
const headingElement = document.querySelector("h2");

wrapperElement.classList.add("wrapper");
wrapperElement.innerHTML = `
<h3>My favourite movie</h3>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
  praesentium repellendus animi vel, aut iusto!
</p>
`;

// bodyElement.appendChild(wrapperElement, headingElement);
