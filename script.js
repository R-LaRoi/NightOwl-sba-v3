// sba.v3  ---------

// selectElementbyID

document.getElementById("start-btn").addEventListener("click", (e) => {
  e.preventDefault("");
  let userName = prompt("What is your name?").toUpperCase();

  // create element <h1>
  let greeting = (document.createElement(
    "h1"
  ).innerHTML = `<div>Welcome ${userName}!</div>`);
  console.log(greeting);

  // select using querySelector
  //  display new text inside of h3
  let subText = document.querySelector("h3");
  subText.innerHTML = greeting;

  let readBtn = document.querySelector("button");
  readBtn.style.display = "none";

  // append to parent element
  let imgDiv = document.createElement("div");
  let nextArrow = document.createElement("img");
  nextArrow.classList.add("arrow-gif");
  nextArrow.src =
    "https://github.com/R-LaRoi/sba-v3/assets/114012059/71db82a0-9cf7-46b8-9055-896e714e3307";

  imgDiv.appendChild(nextArrow);
});

// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.

// // Use appendChild and/or prepend to add new elements to the DOM.

// selector or selector All

// Create at least one element using createElement.

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
